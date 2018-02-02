import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {brush} from 'd3-brush';
import {SpectralDataService} from '../../services/spectral-data.service';

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
             selector:      'app-visualisation-viewer',
             templateUrl:   './visualisation-viewer.component.html',
             styleUrls:     ['./visualisation-viewer.component.scss'],
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
  private data: any;

  /** The svg element to draw the charts in */
  private svg: any;

  /** Object holding data for the focus chart */
  private focus: ChartInterface = {
    margin:    {top: 20, right: 20, bottom: 110, left: 40},
    chartArea: {},
    width:     0,
    height:    0,
    xScale:    {},
    yScale:    {},
    xAxis:     {},
    line:      {}
  };

  /** Object holding data for the context chart */
  private context: ChartInterface = {
    margin:    {top: 350, right: 20, bottom: 30, left: 40},
    chartArea: {},
    width:     0,
    height:    0,
    xScale:    {},
    yScale:    {},
    xAxis:     {},
    line:      {}
  };

  /** The brush on the context chart, used for zooming and panning */
  private brush: any;

  /** The zoom on the focus chart, used for zooming and panning */
  private zoom: any;

  /**
   * constructor
   *
   * @param spectralDataService Injected service
   */
  constructor(private spectralDataService: SpectralDataService) {
  }

  /**
   * Creates the data and two charts
   */
  ngOnInit() {
    this.spectralDataService.getData(1).subscribe(data => this.createVisualiser(data));
  }

  /**
   * Creates and draws the whole visualiser
   *
   * Required for service callback
   */
  createVisualiser(data) {
    this.data = data;
    this.setupSvg();
    this.setupCharts();
    this.setupBrushZoom();
    this.drawRegions();
    this.drawContextChart();
    this.drawFocusChart();
    this.drawLine();
    this.resetView();
  }

  /**
   * Sets up heights, widths and adds the svg element to the DOM
   */
  setupSvg() {
    // Get the div element from the DOM
    const element       = this.chartContainer.nativeElement;
    // Set the width and height of the context chart
    this.context.width  = element.offsetWidth - this.context.margin.left - this.context.margin.right;
    this.context.height = element.offsetHeight - this.context.margin.top - this.context.margin.bottom;
    // Set the width and height of the focus chart (width of both is the same)
    this.focus.width    = this.context.width;
    this.focus.height   = element.offsetHeight - this.focus.margin.top - this.focus.margin.bottom;

    // Append an svg element to the div to draw the charts
    this.svg = d3.select(element).append('svg')
                 .attr('width', element.offsetWidth)
                 .attr('height', element.offsetHeight);

    // Clip path in the focus chart, keeps the line from spilling into margins
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
    // Set the x and y scales of each chart
    this.context.xScale = d3.scaleLinear().range([0, this.context.width]);
    this.focus.xScale   = d3.scaleLinear().range([0, this.focus.width]);
    this.context.yScale = d3.scaleLinear().range([this.context.height, 0]);
    this.focus.yScale   = d3.scaleLinear().range([this.focus.height, 0]);

    // Set the axes for each chart based on x scales
    this.context.xAxis = d3.axisBottom(this.context.xScale);
    this.focus.xAxis   = d3.axisBottom(this.focus.xScale);

    // Set the line for the focus chart based on scales
    this.focus.line = d3.line()
                        .x((d: any) => this.focus.xScale(d[0]))
                        .y((d: any) => this.focus.yScale(d[2]));

    // Set the line for the context chart based on scales
    this.context.line = d3.line()
                          .x((d: any) => this.context.xScale(d[0]))
                          .y((d: any) => this.context.yScale(d[2]));

    // Add the focus chart area to the svg
    this.focus.chartArea = this.svg.append('g')
                               .attr('class', 'focus')
                               .attr('transform', `translate(${this.focus.margin.left}, ${this.focus.margin.top})`);

    // Add the context chart area to the svg
    this.context.chartArea = this.svg.append('g')
                                 .attr('class', 'context')
                                 .attr('transform', `translate(${this.context.margin.left}, ${this.context.margin.top})`);

    // Set the x domain of the focus chart (0 to largest number i.e. 0 - 1000)
    this.focus.xScale.domain([0, d3.max(this.data, d => d[0])]);
    // Set the y domain of the focus chart (max y content to min y content as it could be less than 0)
    this.focus.yScale.domain([d3.max(this.data, d => d[2]), d3.min(this.data, d => d[2])]);
    // Context scale domains the same as focus
    this.context.xScale.domain(this.focus.xScale.domain());
    this.context.yScale.domain(this.focus.yScale.domain());
  }

  /**
   * Sets up the brush and zoom for the charts
   */
  setupBrushZoom() {
    // Create the brush only on the x axis smallest it can be and largest and bind the brushed function
    this.brush = d3.brushX()
                   .extent([[0, 0], [this.context.width, this.context.height]])
                   .on('brush end', this.brushed.bind(this));

    // Create the zoom area controlled by the brush
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
    // Set the colors for the regions
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
    this.focus.chartArea.append('line')
        .attr('class', 'line')
        .attr('x1', this.focus.xScale(350))
        .attr('y1', this.focus.yScale(0))
        .attr('x2', this.focus.xScale(350))
        .attr('y2', this.focus.yScale(this.focus.height))
        .style('stroke-width', 2)
        .style('stroke', 'red')
        .style('fill', 'none');
  }

  /**
   * Draws the context chart axis, line, and adds the brush
   */
  drawContextChart() {
    // Add the line to the context chart
    this.context.chartArea.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.context.line);

    // Add the x axis to the context chart
    this.context.chartArea.append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', `translate(${0}, ${this.context.height})`)
        .call(this.context.xAxis);

    // Add the brush to the context chart
    this.context.chartArea.append('g')
        .attr('class', 'brush')
        .call(this.brush)
        .call(this.brush.move, this.context.xScale.range());
  }

  /**
   * Draws the focus chart and axis
   */
  drawFocusChart() {
    // Draw the line on the focus chart
    this.focus.chartArea.append('path')
        .datum(this.data)
        .attr('class', 'line')
        .attr('d', this.focus.line);

    // Draw the x axis on the focus chart
    this.focus.chartArea.append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', `translate(0, ${this.focus.height})`)
        .call(this.focus.xAxis);
  }

  /**
   * Called when the brush is moved on the context chart
   */
  brushed() {
    // Ignore zoom events
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom') return;
    // Set the new scale to either the event scale or current full scale
    const s = d3.event.selection || this.context.xScale.range();
    // Change the domain of the focus x scale to the desired
    this.focus.xScale.domain(s.map(this.context.xScale.invert, this.context.xScale));

    // Select all the band regions and re-adjust
    this.focus.chartArea.selectAll('.region')
        .attr('x', (d, i) => this.focus.xScale(this.regions[i][0]))
        .attr('y', (d, i) => 0)
        .attr('width', (d, i) => this.focus.xScale(this.regions[i][1]) - this.focus.xScale(this.regions[i][0]))
        .attr('height', this.focus.height);

    // Redraw the line on the focus chart
    this.focus.chartArea.select('.line').attr('d', this.focus.line);

    // Redraw the x axis on the focus chart
    this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);

    // Move the zoom region on the focus chart
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
  changeLine(octile: number) {
    this.spectralDataService.getData(octile).subscribe(data => this.redrawLines(data));
  }

  /**
   * Redraws the displayed lines on focus and context charts
   */
  redrawLines(data: any) {
    this.focus.yScale.domain([d3.max(data, d => d[2]), d3.min(data, d => d[2])]);
    this.context.yScale.domain([d3.max(data, d => d[2]), d3.min(data, d => d[2])]);

    const focusLine = d3.line()
                        .x((d: any) => this.focus.xScale(d[0]))
                        .y((d: any) => this.focus.yScale(d[2]));

    this.focus.chartArea.selectAll('.line')
        .data([data])
        .transition()
        .attr('d', focusLine);

    const contextLine = d3.line()
                          .x((d: any) => this.context.xScale(d[0]))
                          .y((d: any) => this.context.yScale(d[2]));

    this.context.chartArea.selectAll('.line')
        .data([data])
        .transition()
        .attr('d', contextLine);
  }

  /**
   * Resets the brush and zoom to default showing the whole chart
   */
  resetView() {
    this.context.chartArea.select('.brush').call(this.brush.move, null);
  }

}
