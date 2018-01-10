import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {ControlPerformanceComponent} from './control-performance.component';

describe('ControlPerformanceComponent', () => {
  let component: ControlPerformanceComponent;
  let fixture: ComponentFixture<ControlPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ControlPerformanceComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        SuiModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ControlPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
