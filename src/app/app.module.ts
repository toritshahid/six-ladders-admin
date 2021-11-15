import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { IndustryService } from './services/industry.service';
import { HttpClientModule } from '@angular/common/http';
import { AddEducationComponent } from './Education/add-education/add-education.component';
import { DeleteComponent } from './Education/delete/delete.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './Education/edit/edit.component';
import { AddIndustryComponent } from './Industry/add-industry/add-industry.component';
import { DeleteIndustryComponent } from './Industry/deleteIndustry/delete.component';
import { EditIndustryComponent } from './Industry/editIndustry/edit.component';
import { AddStateComponent } from './state/add-state/add-state.component';
import { DeleteStateComponent } from './state/delete-state/delete-state.component';
import { EditStateComponent } from './state/edit-state/edit-state.component';
import { HomeComponent } from './home/home.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { DeleteCityCityComponent } from './city/delete-city-city/delete-city-city.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEducationComponent,
    DeleteComponent,
    EditComponent,
    AddIndustryComponent,
    DeleteIndustryComponent,
    EditIndustryComponent,
    AddStateComponent,
    DeleteStateComponent,
    EditStateComponent,
    HomeComponent,
    EditCityComponent,
    AddCityComponent,
    DeleteCityCityComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IndustryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
