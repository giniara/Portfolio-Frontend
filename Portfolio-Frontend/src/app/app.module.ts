import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HardAnsSoftComponent } from './components/hard-ans-soft/hard-ans-soft.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { CarrouselEducationComponent } from './components/carrousel-education/carrousel-education.component';
import { AppRoutingModule } from './app-routing.module';
import { AdiosComponent } from './components/adios/adios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { IonicModule } from '@ionic/angular';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    LoginComponent,
    CardComponent,
    HardAnsSoftComponent,
    ProjectsComponent,
    CarrouselEducationComponent,
    ProjectsComponent,
    ExperienceComponent,
    AdiosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
