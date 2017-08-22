import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {PanelHostDirective} from "../../directives/panel-host.directive";
import {Panel} from "../../models/panel";
import {ModularPanelInterface} from "../../interfaces/modular-panel";

@Component({
  selector: 'app-modular-panel-loader',
  templateUrl: './modular-panel-loader.component.html',
  styleUrls: ['./modular-panel-loader.component.css']
})
export class ModularPanelLoaderComponent implements OnInit {

  @Input() panels: Panel[];
  @ViewChild(PanelHostDirective) panelHost: PanelHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponents();
  }

  loadComponents() {
    for (let i = 0; i < this.panels.length; i++) {
      this.loadComponent(i);
    }
  }

  loadComponent(index: number) {
    let panel = this.panels[index];
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(panel.component);
    let componentRef = this.panelHost.viewContainerRef.createComponent(componentFactory);
    (<ModularPanelInterface>componentRef.instance).data = panel.data;
  }

}
