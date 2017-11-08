import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PiSelectComponent} from './pi-select.component';
import {PiResultsComponent} from './components/pi-results/pi-results.component';

const routes: Routes = [
  {
    path: '',
    component: PiSelectComponent,
    children: [
      {
        path: 'pi-entry',
        component: PiEntryComponent
      },
      {
        path: 'pi-results',
        component: PiResultsComponent
      },
      {
        path: '',
        redirectTo: 'pi-entry',
        pathMatch: 'full'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PiSelectRoutingModule {
}
