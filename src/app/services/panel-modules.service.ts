import { Injectable } from '@angular/core';
import {ModularPanelComponent} from "../components/modular-panel/modular-panel.component";
import {SpacialImageComponent} from "../components/field-setup/spacial-image/spacial-image.component";
import {FovParametersComponent} from "../components/field-setup/fov-parameters/fov-parameters.component";
import {ImageQueryComponent} from "../components/field-setup/image-query/image-query.component";
import {Panel} from "../models/panel";

@Injectable()
export class PanelModulesService {

  fieldSetup: Panel[];

  constructor() {
    this.fieldSetup = [
      new Panel(
        ModularPanelComponent,
        {
          title: 'Spatial Image',
          body: SpacialImageComponent
        }
      ),
      new Panel(
        ModularPanelComponent,
        {
          title: 'FOV Parameters',
          body: FovParametersComponent
        }
      ),
      new Panel(
        ModularPanelComponent,
        {
          title: 'Image Query',
          body: ImageQueryComponent
        }
      )
    ];
  }

  getFieldSetup(){
    return this.fieldSetup;
  }

}
