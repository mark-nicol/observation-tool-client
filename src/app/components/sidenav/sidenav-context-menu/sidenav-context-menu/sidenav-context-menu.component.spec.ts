import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContextMenuComponent } from './sidenav-context-menu.component';

describe('SidenavContextMenuComponent', () => {
  let component: SidenavContextMenuComponent;
  let fixture: ComponentFixture<SidenavContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
