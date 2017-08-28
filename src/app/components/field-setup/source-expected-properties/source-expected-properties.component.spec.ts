import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceExpectedPropertiesComponent } from './source-expected-properties.component';

describe('SourceExpectedPropertiesComponent', () => {
  let component: SourceExpectedPropertiesComponent;
  let fixture: ComponentFixture<SourceExpectedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceExpectedPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceExpectedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
