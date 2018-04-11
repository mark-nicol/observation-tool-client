import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImportModalComponent } from './project-import-modal.component';

describe('ProjectImportModalComponent', () => {
  let component: ProjectImportModalComponent;
  let fixture: ComponentFixture<ProjectImportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectImportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
