import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { RefinePanelComponent } from "./refine-panel/refine-panel.component";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pi-select',
  templateUrl: './pi-select.component.html',
  styleUrls: ['./pi-select.component.css']
})
export class PiSelectComponent implements OnInit, AfterViewInit {

  @ViewChild(RefinePanelComponent) refinePanel: RefinePanelComponent;
  passedValue: string;
  obsTest: Observable<string>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.obsTest = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.passedValue = params.get('name')
      );
    console.log(this.obsTest);
  }

  ngAfterViewInit(){
  }

}
