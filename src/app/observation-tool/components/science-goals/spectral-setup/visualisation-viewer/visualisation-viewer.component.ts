import {Component, ElementRef, Input, OnChanges, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

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

  @Input() bands = true;
  @Input() transmission = true;

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

  /** Reference to the div in the template which holds the chart */
  @ViewChild('chart') private chartContainer: ElementRef;

  /** The data array for use within the component */
  private data: Array<any>;

  /** The complete svg element of the chart */
  private svg: any;

  /** Margins for the whole svg */
  private margin = {top: 40, right: 20, bottom: 40, left: 20};

  /** The chart group, this is the svg minus the axes */
  private chart: any;

  /** The width of the chart area (element width - lr margins */
  private width: number;

  /** The height of the chart area (element height - tb margins) */
  private height: number;

  /** X Scale for any x-axes */
  private xScale: any;

  /** Y Scale for main chart y-axis */
  private yScale: any;

  private regionScale: any;

  /** The upper x axis of the chart */
  private xUpperAxis: any;

  /** The lower x axis of the chart */
  private xLowerAxis: any;

  /** The y axis of the chart */
  private yAxis: any;

  constructor() {
  }

  ngOnInit() {
    this.createData();
    this.createChart();
  }

  createData() {
    this.data = [];
    for (let i = 0; i < 1000; i++) {
      this.data.push([i, Math.sin(i / 10)]);
    }
  }

  createChart() {
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.chart = this.svg.append('g')
      .attr('class', 'lines')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const
      xDomain = [0, d3.max(this.data, d => d[0])],
      yDomain = [d3.min(this.data, d => d[1]), d3.max(this.data, d => d[1])];

    this.xScale = d3.scaleLinear().domain(xDomain).range([0, this.width]);
    this.regionScale = d3.scaleBand().domain(xDomain).rangeRound([0, this.width]);
    this.yScale = d3.scaleLinear().domain(yDomain).range([this.height, 0]);

    this.drawXAxes();

    this.drawLine();
    this.drawRegions();
  }

  drawXAxes() {
    this.xUpperAxis = this.svg.append('g')
      .attr('class', 'axis axis-x axis-x-upper')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisTop(this.xScale))
      .append('text')
      .attr('class', 'axis-label axis-x-upper-label')
      .attr('transform', `translate(${this.margin.left + (this.width / 2)}, ${-this.margin.top * 0.66})`)
      .text('Observed Frequency');

    this.xLowerAxis = this.svg.append('g')
      .attr('class', 'axis axis-x axis-x-lower')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScale))
      .append('text')
      .attr('class', 'axis-label axis-x-upper-label')
      .attr('transform', `translate(${this.margin.left + (this.width / 2)}, ${this.margin.bottom * 0.66})`)
      .text('Rest Frequency');
  }

  drawRegions() {
    this.regionColors = d3.scaleLinear().domain([0, this.regions.length]).range(<any[]>[
      'limegreen',
      'steelblue'
    ]);
    for (let i = 0; i < this.regions.length; i++) {
      this.chart.append('rect')
        .attr('class', 'region')
        .attr('x', d => this.xScale(this.regions[i][0]))
        .attr('y', d => 0)
        .attr('width', this.xScale(this.regions[i][1]) - this.xScale(this.regions[i][0]))
        .attr('height', this.height)
        .style('fill', d => this.regionColors(i))
        .style('opacity', '0.3')
    }
  }

  drawLine() {
    const line = d3.line()
      .x((d: any) => this.xScale(d[0]))
      .y((d: any) => this.yScale(d[1]));

    this.chart.append('path')
      .data([this.data])
      .attr('class', 'line')
      .attr('d', line);
  }

  hideShowBands(show?: boolean) {
    console.log('hide show bands =', show);
    if (show) {
      this.chart.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.3');
    } else {
      this.chart.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.0');
    }
  }

  hideShowTransmission(show?: boolean) {
    console.log('hide show trans =', show);
    if (show) {
      this.chart.selectAll('.line').transition()
        .style('opacity', '1.0');
    } else {
      this.chart.selectAll('.line').transition()
        .style('opacity', '0.0');
    }
  }

}
