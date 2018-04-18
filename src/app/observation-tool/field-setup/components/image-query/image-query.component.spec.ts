import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {SuiModule} from 'ng2-semantic-ui';
import {ProjectService} from '../../../shared/services/project.service';

import {ImageQueryComponent} from './image-query.component';

describe('ImageQueryComponent', () => {
  let component: ImageQueryComponent;
  let fixture: ComponentFixture<ImageQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ImageQueryComponent
      ],
      imports: [
        HttpClientTestingModule,
        SuiModule
      ],
      providers: [
        ProjectService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ImageQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
