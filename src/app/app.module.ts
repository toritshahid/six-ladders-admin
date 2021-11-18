import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { IndustryService } from './services/industry.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule,
  SocialAuthServiceConfig
} from 'angularx-social-login';
import { AuthInterceptor } from './shared/authconfig.interceptor';
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
    DeleteCityCityComponent,
    SingupComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    SocialLoginModule
  ],
  providers: [IndustryService,{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '90896626709-msu64qivgjdc6njeh41hum5p30jdl7qc.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('566781031291616')
        }
      ]
    } as SocialAuthServiceConfig,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
