import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {PanelBodyDirective} from "../../directives/panel-body.directive";

@Component({
  selector: 'app-modular-panel',
  templateUrl: './modular-panel.component.html',
  styleUrls: ['./modular-panel.component.css']
})
export class ModularPanelComponent implements OnInit {

  @Input() data: any;
  @ViewChild(PanelBodyDirective) panelBody: PanelBodyDirective;
  isCollapsed: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadBody();
  }

  loadBody(){
    this.panelBody.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(
        this.data.body
      )
    );
  }

}
