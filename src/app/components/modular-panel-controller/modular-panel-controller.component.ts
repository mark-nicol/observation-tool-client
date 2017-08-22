import {Component, OnInit, ViewChild} from '@angular/core';
import {PanelModulesService} from "../../services/panel-modules.service";
import {ModularPanelLoaderComponent} from "../modular-panel-loader/modular-panel-loader.component";
import {Panel} from "../../models/panel";

@Component({
  selector: 'app-modular-panel-controller',
  templateUrl: './modular-panel-controller.component.html',
  styleUrls: ['./modular-panel-controller.component.css'],
  providers: [ PanelModulesService ]
})
export class ModularPanelControllerComponent implements OnInit {

  @ViewChild(ModularPanelLoaderComponent) panelLoader;
  panels: Panel[];

  constructor(private panelService: PanelModulesService) { }

  ngOnInit() {
    this.panels = this.panelService.getFieldSetup();
  }

}
