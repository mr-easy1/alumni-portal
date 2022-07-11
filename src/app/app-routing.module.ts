import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitportalComponent } from './exitportal/exitportal.component';
import { Exitportal1Component } from './exitportal1/exitportal1.component';

const routes: Routes = [
  {
    path: "exitportal",
    component: ExitportalComponent,
    pathMatch: "full"
  },
  {
    path:"generatedsuccessfully",
    component:Exitportal1Component,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
