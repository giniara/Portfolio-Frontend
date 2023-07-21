
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HardAnsSoftComponent } from './components/hard-ans-soft/hard-ans-soft.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { CarrouselEducationComponent } from './components/carrousel-education/carrousel-education.component';



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