import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProjectService} from '../../../../shared/services/project.service';

import {ProjectInfoComponent} from './project-info.component';

describe('ProjectInfoComponent', () => {
  let component: ProjectInfoComponent;
  let fixture: ComponentFixture<ProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     imports: [
                                       HttpClientTestingModule
                                     ],
                                     declarations: [
                                       ProjectInfoComponent
                                     ],
                                     providers: [
                                       ProjectService
                                     ]
                                   })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(ProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
