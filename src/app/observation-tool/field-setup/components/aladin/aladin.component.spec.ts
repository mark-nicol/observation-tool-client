import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {AladinComponent} from './aladin.component';

describe('AladinComponent', () => {
  let component: AladinComponent;
  let fixture: ComponentFixture<AladinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     imports:      [HttpClientTestingModule],
                                     declarations: [AladinComponent],
                                     providers:    [PersistenceService]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(AladinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
