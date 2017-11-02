import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
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
  @ViewChild('focus') private focusContainer: ElementRef;

  @ViewChild('context') private contextContainer: ElementRef;

  /** The data array for use within the component */
  private data: Array<any>;

  /** The complete svg element of the chart */
  private focusSvg: any;
  private contextSvg: any;

  /** Margins for the whole svg */
  private focusMargin = {top: 40, right: 20, bottom: 40, left: 20};
  private contextMargin = {top: 0, right: 20, bottom: 40, left: 20};

  /** The chart group, this is the svg minus the axes */
  private focus: any;
  private context: any;

  /** The width of the chart area (element width - lr margins) */
  private focusWidth: number;
  private contextWidth: number;

  /** The height of the chart area (element height - tb margins) */
  private focusHeight: number;
  private contextHeight: number;

  /** X Scale for any x-axes */
  private focusXScale: any;
  private contextXScale: any;

  /** Y Scale for main chart y-axis */
  private focusYScale: any;
  private contextYScale: any;

  /** The upper x axis of the chart */
  private focusXUpperAxis: any;

  /** The lower x axis of the chart */
  private focusXLowerAxis: any;

  private contextXAxis: any;
  /** The y axis of the chart */
  private yAxis: any;

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
    this.contextWidth = element.offsetWidth - this.contextMargin.left - this.contextMargin.right;
    this.contextHeight = element.offsetHeight - this.contextMargin.top - this.contextMargin.bottom;

    this.contextSvg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.context = this.contextSvg.append('g')
      .attr('class', 'context')
      .attr('transform', `translate(${this.contextMargin.left}, ${this.contextMargin.top})`);

    const
      xDomain = [0, d3.max(this.data, d => d[0])],
      yDomain = [d3.min(this.data, d => d[1]), d3.max(this.data, d => d[1])];

    this.contextXScale = d3.scaleLinear().domain(xDomain).range([0, this.contextWidth]);
    this.contextYScale = d3.scaleLinear().domain(yDomain).range([this.contextHeight, 0]);

    this.contextXAxis = this.contextSvg.append('g')
      .attr('class', 'axis axis-x axis-x-context')
      .attr('transform', `translate(${this.contextMargin.left}, ${this.contextMargin.top + this.contextHeight})`)
      .call(d3.axisBottom(this.contextXScale));

    const line = d3.line()
      .x((d: any) => this.contextXScale(d[0]))
      .y((d: any) => this.contextYScale(d[1]));

    this.context.append('path')
      .data([this.data])
      .attr('class', 'line')
      .attr('d', line);
  }

  createFocusChart() {
    const element = this.focusContainer.nativeElement;
    this.focusWidth = element.offsetWidth - this.focusMargin.left - this.focusMargin.right;
    this.focusHeight = element.offsetHeight - this.focusMargin.top - this.focusMargin.bottom;

    this.focusSvg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.focus = this.focusSvg.append('g')
      .attr('class', 'focus')
      .attr('transform', `translate(${this.focusMargin.left}, ${this.focusMargin.top})`);

    const
      xDomain = [0, d3.max(this.data, d => d[0])],
      yDomain = [d3.min(this.data, d => d[1]), d3.max(this.data, d => d[1])];

    this.focusXScale = d3.scaleLinear().domain(xDomain).range([0, this.focusWidth]);
    this.focusYScale = d3.scaleLinear().domain(yDomain).range([this.focusHeight, 0]);

    this.drawXAxes();

    this.drawLine();
    this.drawRegions();
  }

  drawXAxes() {
    this.focusXUpperAxis = this.focusSvg.append('g')
      .attr('class', 'axis axis-x axis-x-upper')
      .attr('transform', `translate(${this.focusMargin.left}, ${this.focusMargin.top})`)
      .call(d3.axisTop(this.focusXScale))
      .append('text')
      .attr('class', 'axis-label axis-x-upper-label')
      .attr('transform', `translate(${this.focusMargin.left + (this.focusWidth / 2)}, ${-this.focusMargin.top * 0.66})`)
      .text('Observed Frequency');

    this.focusXLowerAxis = this.focusSvg.append('g')
      .attr('class', 'axis axis-x axis-x-lower')
      .attr('transform', `translate(${this.focusMargin.left}, ${this.focusMargin.top + this.focusHeight})`)
      .call(d3.axisBottom(this.focusXScale))
      .append('text')
      .attr('class', 'axis-label axis-x-upper-label')
      .attr('transform', `translate(${this.focusMargin.left + (this.focusWidth / 2)}, ${this.focusMargin.bottom * 0.66})`)
      .text('Rest Frequency');
  }

  drawRegions() {
    this.regionColors = d3.scaleLinear().domain([0, this.regions.length]).range(<any[]>[
      'limegreen',
      'steelblue'
    ]);
    for (let i = 0; i < this.regions.length; i++) {
      this.focus.append('rect')
        .attr('class', 'region')
        .attr('x', d => this.focusXScale(this.regions[i][0]))
        .attr('y', d => 0)
        .attr('width', this.focusXScale(this.regions[i][1]) - this.focusXScale(this.regions[i][0]))
        .attr('height', this.focusHeight)
        .style('fill', d => this.regionColors(i))
        .style('opacity', '0.3')
    }
  }

  drawLine() {
    const line = d3.line()
      .x((d: any) => this.focusXScale(d[0]))
      .y((d: any) => this.focusYScale(d[1]));

    this.focus.append('path')
      .data([this.data])
      .attr('class', 'line')
      .attr('d', line);
  }

  hideShowBands(show?: boolean) {
    console.log('hide show bands =', show);
    if (show) {
      this.focus.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.3');
    } else {
      this.focus.selectAll('.region').transition().delay((d, i) => i * 50)
        .style('opacity', '0.0');
    }
  }

  hideShowTransmission(show?: boolean) {
    console.log('hide show trans =', show);
    if (show) {
      this.focus.selectAll('.line').transition()
        .style('opacity', '1.0');
    } else {
      this.focus.selectAll('.line').transition()
        .style('opacity', '0.0');
    }
  }

  brushed() {

  }

  zoomed() {

  }

}
