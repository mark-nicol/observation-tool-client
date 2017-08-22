import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularPanelLoaderComponent } from './modular-panel-loader.component';

describe('ModularPanelLoaderComponent', () => {
  let component: ModularPanelLoaderComponent;
  let fixture: ComponentFixture<ModularPanelLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModularPanelLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularPanelLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
