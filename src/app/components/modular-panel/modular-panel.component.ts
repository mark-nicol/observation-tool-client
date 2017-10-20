import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'modular-panel',
  templateUrl: './modular-panel.component.html',
  styleUrls: ['./modular-panel.component.css']
})
export class ModularPanelComponent implements OnInit {

  @Input() id: string;                                 // ID of the panel to locate in model
  @Input() title: string;
  @Input() image: string;
  isCollapsed = false;                                 // Used for minimizing
  @Output() hiddenChange = new EventEmitter<string>(); // Outputs on close click

  constructor() {
  }

  ngOnInit() {
  }

  removeClick() {
    console.log('Remove click', this.id);
    this.hiddenChange.emit(this.id);
  }

}
