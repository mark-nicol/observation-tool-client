"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var d3 = require("d3");
/**
 * Creates and controls the visualisation on the spectral setup science goal page
 *
 * Uses D3
 */
var VisualisationViewerComponent = /** @class */ (function () {
    function VisualisationViewerComponent(spectralDataService) {
        this.spectralDataService = spectralDataService;
        /** Regions for receiver bands */
        this.regions = [
            [84, 116],
            [120, 163],
            [163, 211],
            [211, 275],
            [275, 372],
            [385, 500],
            [602, 720],
            [787, 950]
        ];
        /** Object holding data for the focus chart */
        this.focus = {
            margin: { top: 20, right: 20, bottom: 110, left: 40 },
            chartArea: {},
            width: 0,
            height: 0,
            xScale: {},
            yScale: {},
            xAxis: {},
            line: {}
        };
        /** Object holding data for the context chart */
        this.context = {
            margin: { top: 430, right: 20, bottom: 30, left: 40 },
            chartArea: {},
            width: 0,
            height: 0,
            xScale: {},
            yScale: {},
            xAxis: {},
            line: {}
        };
    }
    /**
     * Creates the data and two charts
     */
    VisualisationViewerComponent.prototype.ngOnInit = function () {
        this.createData();
        this.setupSvg();
        this.setupCharts();
        this.setupBrushZoom();
        this.drawRegions();
        this.drawContextChart();
        this.drawFocusChart();
    };
    /**
     * Creates the data array for the charts to use
     */
    VisualisationViewerComponent.prototype.createData = function () {
        this.data = this.spectralDataService.getData();
        this.sin = [];
        this.cos = [];
        this.tan = [];
        for (var i = 0; i < 1000; i++) {
            this.sin.push([i, Math.sin(i / 10)]);
            this.cos.push([i, Math.cos(i / 20)]);
            this.tan.push([i, Math.tan(i / 10)]);
        }
    };
    /**
     * Sets up heights, widths and adds the svg element to the DOM
     */
    VisualisationViewerComponent.prototype.setupSvg = function () {
        var element = this.chartContainer.nativeElement;
        this.context.width = element.offsetWidth - this.context.margin.left - this.context.margin.right;
        this.context.height = element.offsetHeight - this.context.margin.top - this.context.margin.bottom;
        this.focus.width = this.context.width;
        this.focus.height = element.offsetHeight - this.focus.margin.top - this.focus.margin.bottom;
        this.svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);
        this.svg.append('defs').append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('width', this.focus.width)
            .attr('height', this.focus.height);
    };
    /**
     * Sets up scales, axes, and lines for both charts
     */
    VisualisationViewerComponent.prototype.setupCharts = function () {
        var _this = this;
        this.context.xScale = d3.scaleLinear().range([0, this.context.width]);
        this.focus.xScale = d3.scaleLinear().range([0, this.focus.width]);
        this.context.yScale = d3.scaleLinear().range([this.context.height, 0]);
        this.focus.yScale = d3.scaleLinear().range([this.focus.height, 0]);
        this.context.xAxis = d3.axisBottom(this.context.xScale);
        this.focus.xAxis = d3.axisBottom(this.focus.xScale);
        this.focus.line = d3.line()
            .x(function (d) { return _this.focus.xScale(d[0]); })
            .y(function (d) { return _this.focus.yScale(d[2]); });
        this.context.line = d3.line()
            .x(function (d) { return _this.context.xScale(d[0]); })
            .y(function (d) { return _this.context.yScale(d[2]); });
        this.focus.chartArea = this.svg.append('g')
            .attr('class', 'focus')
            .attr('transform', "translate(" + this.focus.margin.left + ", " + this.focus.margin.top + ")");
        this.context.chartArea = this.svg.append('g')
            .attr('class', 'context')
            .attr('transform', "translate(" + this.context.margin.left + ", " + this.context.margin.top + ")");
        this.focus.xScale.domain([0, d3.max(this.data, function (d) { return d[0]; })]);
        this.focus.yScale.domain([d3.max(this.data, function (d) { return d[2]; }), d3.min(this.data, function (d) { return d[2]; })]);
        this.context.xScale.domain(this.focus.xScale.domain());
        this.context.yScale.domain(this.focus.yScale.domain());
    };
    /**
     * Sets up the brush and zoom for the charts
     */
    VisualisationViewerComponent.prototype.setupBrushZoom = function () {
        this.brush = d3.brushX()
            .extent([[0, 0], [this.context.width, this.context.height]])
            .on('brush end', this.brushed.bind(this));
        this.zoom = d3.zoom()
            .scaleExtent([1, Infinity])
            .translateExtent([[0, 0], [this.focus.width, this.focus.height]])
            .extent([[0, 0], [this.focus.width, this.focus.height]])
            .on('zoom', this.zoomed.bind(this));
    };
    /**
     * Draws the band regions onto the focus chart
     */
    VisualisationViewerComponent.prototype.drawRegions = function () {
        var _this = this;
        this.regionColors = d3.scaleLinear().domain([0, this.regions.length]).range([
            'limegreen',
            'steelblue'
        ]);
        var _loop_1 = function (i) {
            this_1.focus.chartArea.append('rect')
                .attr('class', 'region')
                .attr('x', function (d) { return _this.focus.xScale(_this.regions[i][0]); })
                .attr('y', function (d) { return 0; })
                .attr('width', this_1.focus.xScale(this_1.regions[i][1]) - this_1.focus.xScale(this_1.regions[i][0]))
                .attr('height', this_1.focus.height)
                .style('fill', function (d) { return _this.regionColors(i); })
                .style('opacity', '0.3');
        };
        var this_1 = this;
        for (var i = 0; i < this.regions.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * Draws the context chart axis, line, and adds the brush
     */
    VisualisationViewerComponent.prototype.drawContextChart = function () {
        this.context.chartArea.append('path')
            .datum(this.data)
            .attr('class', 'line')
            .attr('d', this.context.line);
        this.context.chartArea.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(" + 0 + ", " + this.context.height + ")")
            .call(this.context.xAxis);
        this.context.chartArea.append('g')
            .attr('class', 'brush')
            .call(this.brush)
            .call(this.brush.move, this.context.xScale.range());
    };
    /**
     * Draws the focus chart and axis
     */
    VisualisationViewerComponent.prototype.drawFocusChart = function () {
        this.focus.chartArea.append('path')
            .datum(this.data)
            .attr('class', 'line')
            .attr('d', this.focus.line);
        this.focus.chartArea.append('g')
            .attr('class', 'axis axis-x')
            .attr('transform', "translate(0, " + this.focus.height + ")")
            .call(this.focus.xAxis);
    };
    /**
     * Called when the brush is moved on the context chart
     */
    VisualisationViewerComponent.prototype.brushed = function () {
        var _this = this;
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'zoom')
            return;
        var s = d3.event.selection || this.context.xScale.range();
        this.focus.xScale.domain(s.map(this.context.xScale.invert, this.context.xScale));
        this.focus.chartArea.selectAll('.region')
            .attr('x', function (d, i) { return _this.focus.xScale(_this.regions[i][0]); })
            .attr('y', function (d, i) { return 0; })
            .attr('width', function (d, i) { return _this.focus.xScale(_this.regions[i][1]) - _this.focus.xScale(_this.regions[i][0]); })
            .attr('height', this.focus.height);
        this.focus.chartArea.select('.line').attr('d', this.focus.line);
        this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);
        this.svg.select('.zoom').call(this.zoom.transform, d3.zoomIdentity
            .scale(this.focus.width / (s[1] - s[0]))
            .translate(-s[0], 0));
    };
    /**
     * Called when the focus is zoomed
     */
    VisualisationViewerComponent.prototype.zoomed = function () {
        if (d3.event.sourceEvent && d3.event.sourceEvent.type === 'brush')
            return;
        var t = d3.event.transform;
        this.focus.xScale.domain(t.rescaleX(this.focus.xScale).domain());
        this.focus.chartArea.select('.line').attr('d', this.focus.line);
        console.log(this.focus.chartArea.selectAll('.rect'));
        this.focus.chartArea.select('.axis-x').call(this.focus.xAxis);
        this.context.chartArea.select('.brush').call(this.brush.move, this.focus.xScale.range().map(t.invertX, t));
    };
    /**
     * Hides or shows the receiver bands on the focus chart depending on the checkbox
     */
    VisualisationViewerComponent.prototype.hideShowBands = function (show) {
        if (show) {
            this.focus.chartArea.selectAll('.region').transition().delay(function (d, i) { return i * 50; })
                .style('opacity', '0.3');
        }
        else {
            this.focus.chartArea.selectAll('.region').transition().delay(function (d, i) { return i * 50; })
                .style('opacity', '0.0');
        }
    };
    /**
     * Hides or shows the transmission line depending on the checkbox
     */
    VisualisationViewerComponent.prototype.hideShowTransmission = function (show) {
        if (show) {
            this.focus.chartArea.selectAll('.line').transition()
                .style('opacity', '1.0');
        }
        else {
            this.focus.chartArea.selectAll('.line').transition()
                .style('opacity', '0.0');
        }
    };
    /**
     * Changes the type of line show to demonstrate D3 transition
     */
    VisualisationViewerComponent.prototype.changeLine = function (lineType) {
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
    };
    /**
     * Redraws the displayed lines on focus and context charts
     */
    VisualisationViewerComponent.prototype.redrawLines = function (data) {
        var _this = this;
        this.focus.yScale.domain([d3.min(data, function (d) { return d[1]; }), d3.max(data, function (d) { return d[1]; })]);
        this.context.yScale.domain([d3.min(data, function (d) { return d[1]; }), d3.max(data, function (d) { return d[1]; })]);
        var focusLine = d3.line()
            .x(function (d) { return _this.focus.xScale(d[0]); })
            .y(function (d) { return _this.focus.yScale(d[1]); });
        this.focus.chartArea.selectAll('.line')
            .data([data])
            .transition()
            .attr('d', focusLine);
        var contextLine = d3.line()
            .x(function (d) { return _this.context.xScale(d[0]); })
            .y(function (d) { return _this.context.yScale(d[1]); });
        this.context.chartArea.selectAll('.line')
            .data([data])
            .transition()
            .attr('d', contextLine);
    };
    __decorate([
        core_1.ViewChild('chartDiv')
    ], VisualisationViewerComponent.prototype, "chartContainer", void 0);
    VisualisationViewerComponent = __decorate([
        core_1.Component({
            selector: 'app-visualisation-viewer',
            templateUrl: './visualisation-viewer.component.html',
            styleUrls: ['./visualisation-viewer.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], VisualisationViewerComponent);
    return VisualisationViewerComponent;
}());
exports.VisualisationViewerComponent = VisualisationViewerComponent;
