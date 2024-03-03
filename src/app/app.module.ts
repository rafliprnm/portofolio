import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillComponent } from './components/skill/skill.component';
import { BasicLangComponent } from './components/basic-lang/basic-lang.component';
import { KeluhanComponent } from './components/keluhan/keluhan.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    BasicLangComponent,
    KeluhanComponent,
    ListProjectComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    MatTabsModule

  ],
  exports:[
    PaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
