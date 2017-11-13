import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {brush} from 'd3-brush';

/**
 * Interface for a standard chart. Everything but axes
 */
interface ChartInterface {
  margin: Margin,
  chartArea: any,
  width: number,
  height: number,
  xScale: any,
  yScale: any,
  line: any
}

/**
 * Interface for the focus chart, includes upper and lower axes
 */
interface FocusChartInterface extends ChartInterface {
  xAxis: any,
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
  @ViewChild('chartDiv') private chartContainer: ElementRef;

  /** The data array for use within the component */
  private sin: Array<any>;
  private cos: Array<any>;
  private tan: Array<any>;

  private svg: any;

  /** Object holding data for the focus chart */
  private focus: FocusChartInterface = {
    margin: {top: 20, right: 20, bottom: 110, left: 40},
    chartArea: {},
    width: 0,
    height: 0,
    xScale: {},
    yScale: {},
    xAxis: {},
    line: {}
  };

  /** Object holding data for the context chart */
  private context: ContextChartInterface = {
    margin: {top: 430, right: 20, bottom: 30, left: 40},
    chartArea: {},
    width: 0,
    height: 0,
    xScale: {},
    yScale: {},
    xAxis: {},
    line: {}
  };

  private brush: any;
  private zoom: any;

  /**
   * Creates the data and two charts
   */
  ngOnInit() {
    this.createData();
    const element       = this.chartContainer.nativeElement;
    this.context.width  = element.offsetWidth - this.context.margin.left - this.context.margin.right;
    this.context.height = element.offsetHeight - this.context.margin.top - this.context.margin.bottom;
    this.focus.width    = this.context.width;
    this.focus.height   = element.offsetHeight - this.focus.margin.top - this.focus.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.context.xScale = d3.scaleLinear().range([0, this.context.width]);
    this.focus.xScale   = d3.scaleLinear().range([0, this.focus.width]);
    this.context.yScale = d3.scaleLinear().range([this.context.height, 0]);
    this.focus.yScale   = d3.scaleLinear().range([this.focus.height, 0]);

    this.context.xAxis = d3.axisBottom(this.context.xScale);
    this.focus.xAxis   = d3.axisBottom(this.focus.xScale);

    this.focus.line = d3.line()
      .x((d: any) => this.focus.xScale(d[0]))
      .y((d: any) => this.focus.yScale(d[1]));

    this.context.line = d3.line()
      .x((d: any) => this.context.xScale(d[0]))
      .y((d: any) => this.context.yScale(d[1]));

    this.svg.append('defs').append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('width', this.focus.width)
      .attr('height', this.focus.height);

    this.focus.chartArea = this.svg.append('g')
      .attr('class', 'focus')
      .attr('transform', `translate(${this.focus.margin.left}, ${this.focus.margin.top})`);

    this.context.chartArea = this.svg.append('g')
      .attr('class', 'context')
      .attr('transform', `translate(${this.context.margin.left}, ${this.context.margin.top})`);

    this.focus.xScale.domain([0, d3.max(this.sin, d => d[0])]);
    this.focus.yScale.domain([d3.min(this.sin, d => d[1]), d3.max(this.sin, d => d[1])]);
    this.context.xScale.domain(this.focus.xScale.domain());
    this.context.yScale.domain(this.focus.yScale.domain());

    this.brush = d3.brushX()
      .extent([[0, 0], [this.context.width, this.context.height]])
      .on('brush end', this.brushed.bind(this));

    this.zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [this.focus.width, this.focus.height]])
      .extent([[0, 0], [this.focus.width, this.focus.height]])
      .on('zoom', this.zoomed.bind(this));

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

    this.focus.chartArea.append('path')
      .datum(this.sin)
      .attr('class', 'line')
      .attr('d', this.focus.line);

    this.context.chartArea.append('path')
      .datum(this.sin)
      .attr('class', 'line')
      .attr('d', this.context.line);

    this.focus.chartArea.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0, ${this.focus.height})`)
      .call(this.focus.xAxis);

    this.context.chartArea.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${0}, ${this.context.height})`)
      .call(this.context.xAxis);

    this.context.chartArea.append('g')
      .attr('class', 'brush')
      .call(this.brush)
      .call(this.brush.move, this.context.xScale.range());
  }

  brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return;
    const s = d3.event.selection || this.context.xScale.range();
    this.focus.xScale.domain(s.map(this.context.xScale.invert, this.context.xScale));
    this.focus.chartArea.select('.line').attr('d', this.focus.line);
    this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);
    this.svg.select('.zoom').call(this.zoom.transform, d3.zoomIdentity
      .scale(this.focus.width / (s[1] - s[0]))
      .translate(-s[0], 0));
  }

  zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return;
    const t = d3.event.transform;
    this.focus.xScale.domain(t.rescaleX(this.focus.xScale).domain());
    this.focus.chartArea.select('.line').attr('d', this.focus.line);
    this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);
    this.context.chartArea.select('.brush').call(this.brush.move, this.focus.xScale.range().map(t.invertX, t));
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

  /**
   * Changes the type of line show to demonstrate D3 transition
   */
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

  /**
   * Redraws the displayed lines on focus and context charts
   */
  redrawLines(data: any) {
    this.focus.yScale.domain([d3.min(data, d => d[1]), d3.max(data, d => d[1])]);
    this.context.yScale.domain([d3.min(data, d => d[1]), d3.max(data, d => d[1])]);

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

}
