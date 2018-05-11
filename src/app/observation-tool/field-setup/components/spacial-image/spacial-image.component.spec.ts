import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {ProjectService} from '../../../shared/services/project.service';
import {AladinComponent} from '../aladin/aladin.component';

import {SpacialImageComponent} from './spacial-image.component';

describe('SpacialImageComponent', () => {
  let component: SpacialImageComponent;
  let fixture: ComponentFixture<SpacialImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     declarations: [
                                       SpacialImageComponent,
                                       AladinComponent
                                     ],
                                     imports:      [
                                       FormsModule,
                                       HttpClientTestingModule
                                     ],
                                     providers:    [
                                       ProjectService
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(SpacialImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
