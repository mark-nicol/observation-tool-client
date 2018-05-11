import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {ProjectService} from '../../../shared/services/project.service';
import {SystemService} from '../../../shared/services/system.service';
import {FieldCenterCoordinatesComponent} from './field-center-coordinates.component';

describe('FieldCenterCoordinatesComponent', () => {
  let component: FieldCenterCoordinatesComponent;
  let fixture: ComponentFixture<FieldCenterCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FieldCenterCoordinatesComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        SuiModule,
      ],
      providers: [
        ProjectService,
        SystemService
      ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FieldCenterCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
