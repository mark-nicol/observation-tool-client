import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {FovParametersComponent} from './fov-parameters.component';

describe('FovParametersComponent', () => {
  let component: FovParametersComponent;
  let fixture: ComponentFixture<FovParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FovParametersComponent
      ],
      imports: [
        HttpClientTestingModule,
        SuiModule
      ],
      providers: [
        PersistenceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(FovParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
