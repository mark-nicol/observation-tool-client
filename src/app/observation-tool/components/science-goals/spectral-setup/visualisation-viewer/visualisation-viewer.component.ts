import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

interface ChartInterface {
  svg: any,
  margin: Margin,
  chartArea: any,
  width: number,
  height: number,
  xScale: any,
  yScale: any,
}

interface FocusChartInterface extends ChartInterface {
  xUpperAxis: any,
  xLowerAxis: any
}

interface ContextChartInterface extends ChartInterface {
  xAxis: any
}

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

  private regionColors: any;

  /** Reference to the div in the template to hold the focus chartArea */
  @ViewChild('focus') private focusContainer: ElementRef;

  /** Reference to the div in the template to hold the context chartArea */
  @ViewChild('context') private contextContainer: ElementRef;

  /** The data array for use within the component */
  private data: Array<any>;

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

  constructor() {
  }

  ngOnInit() {
    this.createData();
    this.createFocusChart();
    this.createContextChart();
  }

  createData() {
    this.data = [];
    for (let i = 0; i < 1000; i++) {
      this.data.push([i, Math.sin(i / 10)]);
    }
  }

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
      xDomain = [0, d3.max(this.data, d => d[0])],
      yDomain = [d3.min(this.data, d => d[1]), d3.max(this.data, d => d[1])];

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
      .data([this.data])
      .attr('class', 'line')
      .attr('d', line);
  }

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
      xDomain = [0, d3.max(this.data, d => d[0])],
      yDomain = [d3.min(this.data, d => d[1]), d3.max(this.data, d => d[1])];

    this.focus.xScale = d3.scaleLinear().domain(xDomain).range([0, this.focus.width]);
    this.focus.yScale = d3.scaleLinear().domain(yDomain).range([this.focus.height, 0]);

    this.drawXAxes();
    this.drawLine();
    this.drawRegions();
  }

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

  drawLine() {
    const line = d3.line()
      .x((d: any) => this.focus.xScale(d[0]))
      .y((d: any) => this.focus.yScale(d[1]));

    this.focus.chartArea.append('path')
      .data([this.data])
      .attr('class', 'line')
      .attr('d', line);
  }

  hideShowBands(show?: boolean) {
    console.log('hide show bands =', show);
    if (show) {
      this.focus.chartArea.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.3');
    } else {
      this.focus.chartArea.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.0');
    }
  }

  hideShowTransmission(show?: boolean) {
    console.log('hide show trans =', show);
    if (show) {
      this.focus.chartArea.selectAll('.line').transition()
        .style('opacity', '1.0');
    } else {
      this.focus.chartArea.selectAll('.line').transition()
        .style('opacity', '0.0');
    }
  }

  brushed() {

  }

  zoomed() {

  }

}
