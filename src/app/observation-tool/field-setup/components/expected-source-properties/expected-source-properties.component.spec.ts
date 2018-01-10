import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {ExpectedSourcePropertiesComponent} from './expected-source-properties.component';


describe('ExpectedSourcePropertiesComponent', () => {
  let component: ExpectedSourcePropertiesComponent;
  let fixture: ComponentFixture<ExpectedSourcePropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [
                                       ExpectedSourcePropertiesComponent
                                     ],
                                     imports: [
                                       ReactiveFormsModule,
                                       SuiModule,
                                       HttpClientTestingModule
                                     ],
                                     providers: [
                                       PersistenceService
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ExpectedSourcePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
