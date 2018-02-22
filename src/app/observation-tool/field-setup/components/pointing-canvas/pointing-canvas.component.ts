import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pointing-canvas',
  templateUrl: './pointing-canvas.component.html',
  styleUrls: ['./pointing-canvas.component.css']
})
export class PointingCanvasComponent implements OnInit {

  canvasElement: HTMLCanvasElement;
  canvas: CanvasRenderingContext2D;
  canvasContainer: any;

  constructor() {
  }

  ngOnInit() {
    this.canvasContainer      = document.getElementById('canvas-container');
    this.canvasElement        = document.createElement('canvas');
    this.canvas               = this.canvasElement.getContext('2d');
    this.canvasElement.width  = this.canvasContainer.clientWidth;
    this.canvasElement.height = this.canvasContainer.clientHeight;
    this.canvasContainer.appendChild(this.canvasElement);
  }

  click(event: MouseEvent) {
    this.canvas.fillRect(event.layerX, event.layerY, 50, 50);
    console.log(this.canvas);
  }

}
