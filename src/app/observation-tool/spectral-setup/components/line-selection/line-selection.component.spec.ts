import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {NgxPaginationModule} from 'ngx-pagination';
import {SpectralDataService} from '../../services/spectral-data.service';

import {LineSelectionComponent} from './line-selection.component';

describe('LineSelectionComponent', () => {
  let component: LineSelectionComponent;
  let fixture: ComponentFixture<LineSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SuiModule,
        ReactiveFormsModule,
        NgxPaginationModule

      ],
      declarations: [LineSelectionComponent],
      providers: [SpectralDataService]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(LineSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
