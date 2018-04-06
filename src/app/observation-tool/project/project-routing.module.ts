import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PiEntryComponent} from './components/pi-entry/pi-entry.component';
import {PlannedObservingComponent} from './components/planned-observing/planned-observing.component';
import {ProposalComponent} from './components/proposal/proposal.component';
import {ProjectImportComponent} from '../shared/components/project-import/project-import.component';

const routes: Routes = [
  {
    path:     'project',
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
        component: ProjectImportComponent,
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
