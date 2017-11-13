import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {brush} from 'd3-brush';

/**
 * Interface for a standard chart. Everything but axes
 */
interface ChartInterface {
  /** Margins for the chart */
  margin: Margin,
  /** Area of the chart showing data i.e. not axes */
  chartArea: any,
  /** Total width of the chart */
  width: number,
  /** Total height of the chart */
  height: number,
  /** Data -> SVG binding for the x axis */
  xScale: any,
  /** Data -> SVG binding for the y axis */
  yScale: any,
  /** The X axis of the chart */
  xAxis: any,
  /** The line to show on the chart */
  line: any
}

/**
 * Interface for chart margins
 */
interface Margin {
  /** Top margin */
  top: number,
  /** Right margin */
  right: number,
  /** Bottom margin */
  bottom: number,
  /** Left margin */
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

  /** The svg element to draw the charts in */
  private svg: any;

  /** Object holding data for the focus chart */
  private focus: ChartInterface = {
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
  private context: ChartInterface = {
    margin: {top: 430, right: 20, bottom: 30, left: 40},
    chartArea: {},
    width: 0,
    height: 0,
    xScale: {},
    yScale: {},
    xAxis: {},
    line: {}
  };

  /** The brush on the context chart, used for zooming and panning */
  private brush: any;
  private zoom: any;

  /**
   * Creates the data and two charts
   */
  ngOnInit() {
    this.createData();
    this.setupSvg();
    this.setupCharts();
    this.setupBrushZoom();
    this.drawRegions();
    this.drawContextChart();
    this.drawFocusChart();
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
   * Sets up heights, widths and adds the svg element to the DOM
   */
  setupSvg() {
    const element       = this.chartContainer.nativeElement;
    this.context.width  = element.offsetWidth - this.context.margin.left - this.context.margin.right;
    this.context.height = element.offsetHeight - this.context.margin.top - this.context.margin.bottom;
    this.focus.width    = this.context.width;
    this.focus.height   = element.offsetHeight - this.focus.margin.top - this.focus.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight);

    this.svg.append('defs').append('clipPath')
      .attr('id', 'clip')
      .append('rect')
      .attr('width', this.focus.width)
      .attr('height', this.focus.height);
  }

  /**
   * Sets up scales, axes, and lines for both charts
   */
  setupCharts() {
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
  }

  /**
   * Sets up the brush and zoom for the charts
   */
  setupBrushZoom() {
    this.brush = d3.brushX()
      .extent([[0, 0], [this.context.width, this.context.height]])
      .on('brush end', this.brushed.bind(this));

    this.zoom = d3.zoom()
      .scaleExtent([1, Infinity])
      .translateExtent([[0, 0], [this.focus.width, this.focus.height]])
      .extent([[0, 0], [this.focus.width, this.focus.height]])
      .on('zoom', this.zoomed.bind(this));
  }

  /**
   * Draws the band regions onto the focus chart
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
   * Draws the context chart axis, line, and adds the brush
   */
  drawContextChart() {
    this.context.chartArea.append('path')
      .datum(this.sin)
      .attr('class', 'line')
      .attr('d', this.context.line);

    this.context.chartArea.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${0}, ${this.context.height})`)
      .call(this.context.xAxis);

    this.context.chartArea.append('g')
      .attr('class', 'brush')
      .call(this.brush)
      .call(this.brush.move, this.context.xScale.range());
  }

  /**
   * Draws the focus chart and axis
   */
  drawFocusChart() {
    this.focus.chartArea.append('path')
      .datum(this.sin)
      .attr('class', 'line')
      .attr('d', this.focus.line);

    this.focus.chartArea.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(0, ${this.focus.height})`)
      .call(this.focus.xAxis);
  }

  /**
   * Called when the brush is moved on the context chart
   */
  brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return;
    const s = d3.event.selection || this.context.xScale.range();
    this.focus.xScale.domain(s.map(this.context.xScale.invert, this.context.xScale));

    this.focus.chartArea.selectAll('.region')
      .attr('x', (d, i) => this.focus.xScale(this.regions[i][0]))
      .attr('y', (d, i) => 0)
      .attr('width', (d, i) => this.focus.xScale(this.regions[i][1]) - this.focus.xScale(this.regions[i][0]))
      .attr('height', this.focus.height);

    this.focus.chartArea.select('.line').attr('d', this.focus.line);
    this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);
    this.svg.select('.zoom').call(this.zoom.transform, d3.zoomIdentity
      .scale(this.focus.width / (s[1] - s[0]))
      .translate(-s[0], 0));
  }

  /**
   * Called when the focus is zoomed
   */
  zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush') return;
    const t = d3.event.transform;
    this.focus.xScale.domain(t.rescaleX(this.focus.xScale).domain());
    this.focus.chartArea.select('.line').attr('d', this.focus.line);
    console.log(this.focus.chartArea.selectAll('.rect'));
    this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);
    this.context.chartArea.select('.brush').call(this.brush.move, this.focus.xScale.range().map(t.invertX, t));
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
