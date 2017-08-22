import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularPanelControllerComponent } from './modular-panel-controller.component';

describe('ModularPanelControllerComponent', () => {
  let component: ModularPanelControllerComponent;
  let fixture: ComponentFixture<ModularPanelControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModularPanelControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularPanelControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
