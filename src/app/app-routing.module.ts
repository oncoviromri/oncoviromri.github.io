import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsComponent} from "./publications/publications.component";
import {ContactComponent} from "./contact/contact.component";
import {ResearchComponent} from "./research/research.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'research', component: ResearchComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
