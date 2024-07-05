import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './Component/accueil/accueil.component';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdinateurComponent } from './Component/ordinateur/ordinateur.component';
import { ProblemeComponent } from './Component/probleme/probleme.component';
import { OrdinateurDetailComponent } from './Component/ordinateur-detail/ordinateur-detail.component';
import { ProblemeDetailComponent } from './Component/probleme-detail/probleme-detail.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './Component/login/login.component';
import { UserComponent } from './Component/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    OrdinateurComponent,
    ProblemeComponent,
    OrdinateurDetailComponent,
    ProblemeDetailComponent,
    LoginComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgxChartsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
