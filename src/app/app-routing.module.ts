import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {
    path:'second',
    component: SecondPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
