import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';
import { AuthenticateService } from './services/authenticate.service';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { enableProdMode } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyuserComponent } from './myuser/myuser.component';
import { HomeComponent } from './home/home.component';
import {MdSidenavModule} from '@angular/material';


enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MyuserComponent,
HomeComponent
  ],
  imports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MdSidenavModule
   
  ],
  providers: [AuthenticateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
