import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-visualisation-control',
  templateUrl: './visualisation-control.component.html',
  styleUrls: ['./visualisation-control.component.scss']
})
export class VisualisationControlComponent implements OnInit {

  bandsChecked = true;
  @Output() bandsCheckedEmitter = new EventEmitter<boolean>();
  transmissionChecked = true;
  @Output() transmissionCheckedEmitter = new EventEmitter<boolean>();

  @Output() densityRadioEmitter = new EventEmitter<string>();
  @Output() densitySelectorEmitter = new EventEmitter<string>();

  densityRadioChoice = 'automatic';

  // columnDensityChoices = [
  //   '0.472mm (1st Octile)',
  //   '0.658mm (2nd Octile)',
  //   '0.913mm (3rd Octile)',
  //   '1.262mm (4th Octile)',
  //   '1.796mm (5th Octile)',
  //   '2.748mm (6th Octile)',
  //   '5.186mm (7th Octile)',
  // ];

  columnDensityChoices = [
    'sin',
    'cos',
    'tan',
  ];

  constructor() {
  }

  ngOnInit() {
  }

  bandsCheckedChange() {
    this.bandsChecked = !this.bandsChecked;
    this.bandsCheckedEmitter.emit(this.bandsChecked);
  }

  transmissionCheckedChange() {
    this.transmissionChecked = !this.transmissionChecked;
    this.transmissionCheckedEmitter.emit(this.transmissionChecked);
  }

  densityRadioChange(newRadio: string) {
    this.densityRadioChoice = newRadio;
    this.densityRadioEmitter.emit(newRadio);
  }

  densitySelectorChange(newDensity: string) {
    this.densitySelectorEmitter.emit(newDensity);
  }

}
