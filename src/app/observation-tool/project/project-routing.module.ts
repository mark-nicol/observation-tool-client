import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
