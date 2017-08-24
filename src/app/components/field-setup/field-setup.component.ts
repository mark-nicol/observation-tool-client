import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css']
})
export class FieldSetupComponent implements OnInit {

  components: {[id: string] : {title: string, shown: boolean}} = { };

  constructor() {
    this.components['spatial'] = {title: 'Spatial Image', shown: true};
    this.components['fov'] = {title: 'FOV Parameters', shown: true};
    this.components['query'] = {title: 'Image Query', shown: true};
  }

  ngOnInit() {
  }

  hiddenChange(event) {
    this.components[event].shown = !this.components[event].shown;
  }

  showPanel(key: string) {
    console.log('show panel', key);
    if (this.components[key].shown === false)
      this.components[key].shown = true;
  }

}
