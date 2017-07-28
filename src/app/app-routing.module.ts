import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

/* Components */
import { PiEntryComponent } from "./components/pi-entry/pi-entry.component"
import { PiSelectComponent } from "./components/pi-select/pi-select.component"

const routes: Routes = [
  {
    path: 'pi-entry',
    component: PiEntryComponent,
    children: []
  },
  {
    path: 'pi-entry/:value',
    component: PiEntryComponent,
    children: []
  },
  {
    path: 'pi-select',
    component: PiSelectComponent,
    children: []
  },
  {
    path: 'pi-select/:value',
    component: PiSelectComponent,
    children: []
  },
  {
    path: '',
    redirectTo: '/pi-entry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
