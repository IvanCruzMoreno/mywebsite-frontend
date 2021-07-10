import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { FrontPageComponent } from './components/front-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubService } from './services/github.service';
import { EmailService } from './services/email.service';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { FormContactComponent } from './components/form-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    GithubService,
    EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
