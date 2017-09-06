import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'field-setup',
  templateUrl: './field-setup.component.html',
  styleUrls: ['./field-setup.component.css']
})
export class FieldSetupComponent implements OnInit {


  tableHeaders: string[];
  componentKeys = Object.keys;
  components: {[id: string] : {title: string, shown: boolean}} = {
    'spatial': {
      title: 'Spatial Image', shown: true
    },
    'fov': {
      title: 'FOV Parameters', shown: true
    },
    'query': {
      title: 'Image Query', shown: true
    },
    'field-source': {
      title: 'Source', shown: true
    },
    'expected': {
      title: 'Expected Source Properties', shown: true
    },
    'field-centre': {
      title: 'Field Centre Coordinates', shown: true
    }
  };

  constructor() {
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

  setHeaders(headers: string[]) {
    this.tableHeaders = headers;
  }

}
