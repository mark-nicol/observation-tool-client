import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {ToastModule, ToastOptions, ToastsManager} from 'ng2-toastr';
import {PersistenceService} from '../../../shared/services/persistence.service';

import {PiEntryComponent} from './pi-entry.component';
import {PiSearchComponent} from './pi-search/pi-search.component';
import {ProjectInfoComponent} from './project-info/project-info.component';

describe('PiEntryComponent', () => {
  let component: PiEntryComponent;
  let fixture: ComponentFixture<PiEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SuiModule,
        ToastModule.forRoot()
      ],
      declarations: [
        PiEntryComponent,
        PiSearchComponent,
        ProjectInfoComponent
      ],
      providers: [
        PersistenceService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(PiEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
