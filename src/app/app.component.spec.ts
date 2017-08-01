import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        NavbarComponent,
        SidenavComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
