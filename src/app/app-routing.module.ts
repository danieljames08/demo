import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './components/home/accordion/accordion.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'acc',component:AccordionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }