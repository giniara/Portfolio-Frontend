import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { ExperienceComponent } from './experience/experience.component';
import { HardAnsSoftComponent } from './hard-ans-soft/hard-ans-soft.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './modals/login/login.component';
import { CarrouselEducationComponent } from './carrousel-education/carrousel-education.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CardComponent,
    ExperienceComponent,
    HardAnsSoftComponent,
    ProjectsComponent,
    LoginComponent,
    CarrouselEducationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
