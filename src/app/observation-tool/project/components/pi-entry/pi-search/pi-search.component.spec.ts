import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {ToastModule} from 'ng2-toastr';
import {AlmaInvestigatorSearchService} from '../../../../alma-investigator-search/services/alma-investigator-search.service';
import {ProjectService} from '../../../../shared/services/project.service';

import {PiSearchComponent} from './pi-search.component';

describe('PiSearchComponent', () => {
  let component: PiSearchComponent;
  let fixture: ComponentFixture<PiSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SuiModule,
        ToastModule.forRoot()
      ],
      declarations: [
        PiSearchComponent
      ],
      providers: [
        AlmaInvestigatorSearchService,
        ProjectService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(PiSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
