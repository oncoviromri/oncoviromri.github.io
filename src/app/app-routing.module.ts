import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PublicationsComponent} from "./publications/publications.component";
import {TeamComponent} from "./team/team.component";
import {CareersComponent} from "./careers/careers.component";
import {ContactComponent} from "./contact/contact.component";
import {SoftwareComponent} from "./software/software.component";
import {FundingComponent} from "./funding/funding.component";
import {ResearchComponent} from "./research/research.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'funding', component: FundingComponent },
  { path: 'research', component: ResearchComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
