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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    // Déclaration des composants de l'application
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
    // Modules importés nécessaires à l'application
    BrowserModule, // Module de base pour exécuter une application Angular dans un navigateur
    AppRoutingModule, // Module de routage définissant les itinéraires de l'application
    BrowserAnimationsModule, // Module pour les animations Angular
    FormsModule, // Module pour gérer les formulaires de modèle dans Angular
    ReactiveFormsModule, // Module pour gérer les formulaires réactifs dans Angular
    HttpClientModule, // Module pour effectuer des requêtes HTTP dans Angular
    MatIconModule, // Module pour les icônes Material
    MatButtonModule, // Module pour les boutons Material
    MatToolbarModule, // Module pour la barre d'outils Material
    MatSidenavModule, // Module pour le panneau latéral Material
    MatListModule, // Module pour les listes Material
    NgxChartsModule, // Module pour les graphiques NGX
    MatTableModule, // Module pour les tables Material
  ],
  providers: [], // Fournisseurs de services de l'application (optionnel)
  bootstrap: [AppComponent] // Composant racine de l'application à démarrer
})
export class AppModule { }
