import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {VisualisationControlComponent} from './visualisation-control.component';

describe('VisualisationControlComponent', () => {
  let component: VisualisationControlComponent;
  let fixture: ComponentFixture<VisualisationControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VisualisationControlComponent
      ],
      imports: [FormsModule, SuiModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(VisualisationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
