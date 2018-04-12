import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProposalComponent} from './components/proposal/proposal.component';
import {StartComponent} from './components/start/start.component';
import {PersistenceService} from '../shared/services/persistence.service';

const routes: Routes = [
  {
    path: 'new-start',
    component: StartComponent
  },
  {
    path:     'project',
    canActivate: [PersistenceService],
    children: [
      {
        path:      'pi-entry',
        component: PiEntryComponent
      },
      {
        path:      'proposal',
        component: ProposalComponent,
      },
      {
        path:      'planned-observing',
        component: PlannedObservingComponent,
      },
      {
        path:       '',
        redirectTo: 'pi-entry',
        pathMatch:  'full'
      }
    ],
  }
];

@NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
          })

export class ProjectRoutingModule {
}
