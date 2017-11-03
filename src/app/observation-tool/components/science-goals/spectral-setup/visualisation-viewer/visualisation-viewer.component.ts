import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {brush} from 'd3-brush';

/**
 * Interface for a standard chart. Everything but axes
 */
interface ChartInterface {
  svg: any,
  margin: Margin,
  chartArea: any,
  width: number,
  height: number,
  xScale: any,
  yScale: any,
}

/**
 * Interface for the focus chart, includes upper and lower axes
 */
interface FocusChartInterface extends ChartInterface {
  xUpperAxis: any,
  xLowerAxis: any
}

/**
 * Interface for the context chart. Lower X axis only
 */
interface ContextChartInterface extends ChartInterface {
  xAxis: any
}

/**
 * Interface for chart margins
 */
interface Margin {
  top: number,
  right: number,
  bottom: number,
  left: number
}

/**
 * Creates and controls the visualisation on the spectral setup science goal page
 *
 * Uses D3
 */

@Component({
  selector: 'app-visualisation-viewer',
  templateUrl: './visualisation-viewer.component.html',
  styleUrls: ['./visualisation-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VisualisationViewerComponent implements OnInit {

  /** Regions for receiver bands */
  private regions = [
    [84, 116],
    [120, 163],
    [163, 211],
    [211, 275],
    [275, 372],
    [385, 500],
    [602, 720],
    [787, 950]
  ];

  /** Colors for receiver band regions */
  private regionColors: any;

  /** Reference to the div in the template to hold the focus chartArea */
  @ViewChild('focus') private focusContainer: ElementRef;

  /** Reference to the div in the template to hold the context chartArea */
  @ViewChild('context') private contextContainer: ElementRef;

  /** The data array for use within the component */
  private sin: Array<any>;
  private cos: Array<any>;
  private tan: Array<any>;

  /** Object holding data for the focus chart */
  private focus: FocusChartInterface = {
    svg: {},
    margin: {top: 40, right: 20, bottom: 40, left: 20},
    chartArea: {},
    width: 0,
    height: 0,
    xScale: {},
    yScale: {},
    xUpperAxis: {},
    xLowerAxis: {}
  };

  /** Object holding data for the context chart */
  private context: ContextChartInterface = {
    svg: {},
    margin: {top: 0, right: 20, bottom: 40, left: 20},
    chartArea: {},
    width: 0,
    height: 0,
    xScale: {},
    yScale: {},
    xAxis: {}
  };

  private brush: any;
  private zoom: any;

  /**
   * Creates the data and two charts
   */
  ngOnInit() {
    this.createData();
    this.createFocusChart();
    this.createContextChart();
  }

  /**
   * Creates the data array for the charts to use
   */
  createData() {
    this.sin = [];
    this.cos = [];
    this.tan = [];
    for (let i = 0; i < 1000; i++) {
      this.sin.push([i, Math.sin(i / 10)]);
      this.cos.push([i, Math.cos(i / 20)]);
      this.tan.push([i, Math.tan(i / 10)]);
    }
  }

  /**
   * Creates and draws the smaller context chart
   */
  createContextChart() {
    const element = this.contextContainer.nativeElement;
    this.context.width = element.offsetWidth - this.context.margin.left - this.context.margin.right;
    this.context.height = element.offsetHeight - this.context.margin.top - this.context.margin.bottom;

    this.context.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.context.chartArea = this.context.svg.append('g')
      .attr('class', 'context')
      .attr('transform', `translate(${this.context.margin.left}, ${this.context.margin.top})`);

    const
      xDomain = [0, d3.max(this.sin, d => d[0])],
      yDomain = [d3.min(this.sin, d => d[1]), d3.max(this.sin, d => d[1])];

    this.context.xScale = d3.scaleLinear().domain(xDomain).range([0, this.context.width]);
    this.context.yScale = d3.scaleLinear().domain(yDomain).range([this.context.height, 0]);

    this.context.xAxis = this.context.svg.append('g')
      .attr('class', 'axis axis-x axis-x-context')
      .attr('transform', `translate(${this.context.margin.left}, ${this.context.margin.top + this.context.height})`)
      .call(d3.axisBottom(this.context.xScale));

    const line = d3.line()
      .x((d: any) => this.context.xScale(d[0]))
      .y((d: any) => this.context.yScale(d[1]));

    this.context.chartArea.append('path')
      .data([this.sin])
      .attr('class', 'line')
      .attr('d', line);
  }

  /**
   * Creates and draws the larger focus chart
   */
  createFocusChart() {
    const element = this.focusContainer.nativeElement;
    this.focus.width = element.offsetWidth - this.focus.margin.left - this.focus.margin.right;
    this.focus.height = element.offsetHeight - this.focus.margin.top - this.focus.margin.bottom;

    this.focus.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.focus.chartArea = this.focus.svg.append('g')
      .attr('class', 'focus')
      .attr('transform', `translate(${this.focus.margin.left}, ${this.focus.margin.top})`);

    const
      xDomain = [0, d3.max(this.sin, d => d[0])],
      yDomain = [d3.min(this.sin, d => d[1]), d3.max(this.sin, d => d[1])];

    this.focus.xScale = d3.scaleLinear().domain(xDomain).range([0, this.focus.width]);
    this.focus.yScale = d3.scaleLinear().domain(yDomain).range([this.focus.height, 0]);

    this.drawXAxes();
    this.drawLine();
    this.drawRegions();
  }

  /**
   * Draws the x axes for the focus chart
   */
  drawXAxes() {
    this.focus.xUpperAxis = this.focus.svg.append('g')
      .attr('class', 'axis axis-x axis-x-upper')
      .attr('transform', `translate(${this.focus.margin.left}, ${this.focus.margin.top})`)
      .call(d3.axisTop(this.focus.xScale))
      .append('text')
      .attr('class', 'axis-label axis-x-upper-label')
      .attr('transform', `translate(${this.focus.margin.left + (this.focus.width / 2)}, ${-this.focus.margin.top * 0.66})`)
      .text('Observed Frequency');

    this.focus.xLowerAxis = this.focus.svg.append('g')
      .attr('class', 'axis axis-x axis-x-lower')
      .attr('transform', `translate(${this.focus.margin.left}, ${this.focus.margin.top + this.focus.height})`)
      .call(d3.axisBottom(this.focus.xScale))
      .append('text')
      .attr('class', 'axis-label axis-x-upper-label')
      .attr('transform', `translate(${this.focus.margin.left + (this.focus.width / 2)}, ${this.focus.margin.bottom * 0.66})`)
      .text('Rest Frequency');
  }

  /**
   * Draws the receiver band regions on the focus chart
   */
  drawRegions() {
    this.regionColors = d3.scaleLinear().domain([0, this.regions.length]).range(<any[]>[
      'limegreen',
      'steelblue'
    ]);
    for (let i = 0; i < this.regions.length; i++) {
      this.focus.chartArea.append('rect')
        .attr('class', 'region')
        .attr('x', d => this.focus.xScale(this.regions[i][0]))
        .attr('y', d => 0)
        .attr('width', this.focus.xScale(this.regions[i][1]) - this.focus.xScale(this.regions[i][0]))
        .attr('height', this.focus.height)
        .style('fill', d => this.regionColors(i))
        .style('opacity', '0.3')
    }
  }

  /**
   * Draws the line on the focus chart
   */
  drawLine() {
    const line = d3.line()
      .x((d: any) => this.focus.xScale(d[0]))
      .y((d: any) => this.focus.yScale(d[1]));

    this.focus.chartArea.append('path')
      .data([this.sin])
      .attr('class', 'line')
      .attr('d', line);
  }

  /**
   * Hides or shows the receiver bands on the focus chart depending on the checkbox
   */
  hideShowBands(show?: boolean) {
    if (show) {
      this.focus.chartArea.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.3');
    } else {
      this.focus.chartArea.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.0');
    }
  }

  /**
   * Hides or shows the transmission line depending on the checkbox
   */
  hideShowTransmission(show?: boolean) {
    if (show) {
      this.focus.chartArea.selectAll('.line').transition()
        .style('opacity', '1.0');
    } else {
      this.focus.chartArea.selectAll('.line').transition()
        .style('opacity', '0.0');
    }
  }

  changeLine(lineType: string) {
    switch (lineType) {
      case 'sin':
        this.redrawLines(this.sin);
        break;
      case 'cos':
        this.redrawLines(this.cos);
        break;
      case 'tan':
        this.redrawLines(this.tan);
        break;
      default:
        break;
    }
  }

  redrawLines(data: any) {
    this.focus.xScale.domain([0, d3.max(data, d => d[0])]);
    this.focus.yScale.domain([d3.min(data, d => d[1]), d3.max(data, d => d[1])]);
    this.context.xScale = this.focus.xScale;
    this.context.yScale.domain([d3.min(data, d => d[1]), d3.max(data, d => d[1])]);
    this.focus.xUpperAxis.transition().call(d3.axisTop(this.focus.xScale));
    this.focus.xLowerAxis.transition().call(d3.axisBottom(this.focus.xScale));
    this.context.xAxis.transition().call(d3.axisBottom(this.context.xScale));

    const focusLine = d3.line()
      .x((d: any) => this.focus.xScale(d[0]))
      .y((d: any) => this.focus.yScale(d[1]));

    this.focus.chartArea.selectAll('.line')
      .data([data])
      .transition()
      .attr('d', focusLine);

    const contextLine = d3.line()
      .x((d: any) => this.context.xScale(d[0]))
      .y((d: any) => this.context.yScale(d[1]));

    this.context.chartArea.selectAll('.line')
      .data([data])
      .transition()
      .attr('d', contextLine);
  }

  brushed() {

  }

  zoomed() {

  }

}
