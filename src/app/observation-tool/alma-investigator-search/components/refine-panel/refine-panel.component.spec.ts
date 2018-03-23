import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {RefinePanelComponent} from './refine-panel.component';

describe('RefinePanelComponent', () => {
  let component: RefinePanelComponent;
  let fixture: ComponentFixture<RefinePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefinePanelComponent],
      imports: [
        SuiModule,
        FormsModule
      ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(RefinePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
