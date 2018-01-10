import {HttpClientTestingModule} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import 'jasmine';
import {SuiModule} from 'ng2-semantic-ui';
import {ContextMenuModule} from 'ngx-contextmenu';

import {AppComponent} from './app.component';
import {NavbarComponent} from './observation-tool/navbar/navbar.component';
import {PersistenceService} from './observation-tool/shared/services/persistence.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
                                     imports: [
                                       RouterTestingModule,
                                       HttpClientTestingModule,
                                       ContextMenuModule,
                                       NgbModule,
                                       SuiModule
                                     ],
                                     declarations: [
                                       AppComponent,
                                       NavbarComponent,
                                     ],
                                     providers: [
                                       PersistenceService
                                     ]
                                   }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app     = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
