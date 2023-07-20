
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ExperienceComponent } from './experience/experience.component';
import { HardAnsSoftComponent } from './hard-ans-soft/hard-ans-soft.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './modals/login/login.component';
import { CarrouselEducationComponent } from './carrousel-education/carrousel-education.component';



const  appRoute: Routes = [
    {path:'', component: NavbarComponent},
    {path:'', component: BannerComponent},
    {path:'', component: CardComponent},
    {path:'', component: ExperienceComponent},
    {path:'', component: HardAnsSoftComponent},
    {path:'', component: ProjectsComponent},
    {path:'', component: LoginComponent},
    {path:'', component: CarrouselEducationComponent},

  ]
  
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}