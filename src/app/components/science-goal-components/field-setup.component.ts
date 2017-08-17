import {Component, Input} from "@angular/core";
import {ScienceGoalComponent} from "./science-goal.component";
import {ResizeEvent} from "angular-resizable-element";

@Component({
  template: `
    <h1>{{isDragging}}</h1>
    <div ngDraggable 
         mwlResizable
         [enableGhostResize]="true"
         [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
         (resizeEnd)="onResizeEnd($event)"
         (started)="isDragging = true"
         (stopped)="isDragging = false"
         [ngStyle]="style"
         [handle]="PanelHandle"
         class="panel panel-default">
      <div #PanelHandle
           class="panel-heading">
        <span>{{data.title}}</span>
        <button class="btn btn-default btn-sm pull-right"
                (click)="isCollapsed = !isCollapsed"
                [attr.aria-expanded]="!isCollapsed"
                aria-controls="panelBody">
          <span class="glyphicon" [class.glyphicon-menu-up]="isCollapsed" [class.glyphicon-minus]="!isCollapsed"></span>
        </button>
      </div>
      <div class="panel-body"
           id="panelBody"
           [ngbCollapse]="isCollapsed">
        {{data.body}}
      </div>
    </div>
  `
})

export class FieldSetupComponent implements ScienceGoalComponent {

  @Input() data: any;
  isCollapsed = false;
  isDragging = false;

  public style: Object = {};

  log(message) {
    console.log(message)
  }

  onResizeEnd(event: ResizeEvent) {
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    }
  }
}
