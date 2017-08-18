import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ScienceGoalComponent} from "./science-goal.component";
import {ResizeEvent} from "angular-resizable-element";

@Component({
  template: `    
    <div ngDraggable
         *ngIf="isShown"
         (resizeEnd)="onResizeEnd($event)"
         (started)="isDragging = true"
         (stopped)="isDragging = false"
         style="width: 20em"
         [ngStyle]="style"
         [handle]="PanelHandle"
         class="panel panel-default">
      <h4>I'm the science goal</h4>
      <div #PanelHandle
           class="panel-heading">
        <span>{{data.title}}</span>
        <button class="btn btn-default btn-sm pull-right" (click)="closeClick()">
          <span class="glyphicon glyphicon-remove"></span>
        </button>
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

  @Output() closeComponent = new EventEmitter<ScienceGoalComponent>();
  @Input() data: any;
  isCollapsed = false;
  isDragging = false;
  isShown = true;

  public style: Object = {};

  log(message) {
    console.log(message)
  }

  closeClick() {
    this.isShown = !this.isShown;
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
