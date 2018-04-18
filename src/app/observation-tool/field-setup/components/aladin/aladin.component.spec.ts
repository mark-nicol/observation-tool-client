import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProjectService} from '../../../shared/services/project.service';

import {AladinComponent} from './aladin.component';

describe('AladinComponent', () => {
  let component: AladinComponent;
  let fixture: ComponentFixture<AladinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     imports:      [HttpClientTestingModule],
                                     declarations: [AladinComponent],
                                     providers:    [ProjectService]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(AladinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
