import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pointing-canvas',
  templateUrl: './pointing-canvas.component.html',
  styleUrls: ['./pointing-canvas.component.css']
})
export class PointingCanvasComponent implements OnInit {

  canvElement: HTMLCanvasElement;
  canv: CanvasRenderingContext2D;
  canvContainer: any;

  constructor() {
  }

  ngOnInit() {
    this.canvContainer      = document.getElementById('canvas-container');
    this.canvElement        = document.createElement('canvas');
    this.canv               = this.canvElement.getContext('2d');
    this.canvElement.width  = this.canvContainer.clientWidth;
    this.canvElement.height = this.canvContainer.clientHeight;
    this.canvContainer.appendChild(this.canvElement);
    this.canv.fillRect(100, 100, 50, 50);
  }

  click(event: MouseEvent) {
    console.log('click', event);
  }

}
