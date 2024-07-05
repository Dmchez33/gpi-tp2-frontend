import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Component/accueil/accueil.component';
import { OrdinateurComponent } from './Component/ordinateur/ordinateur.component';
import { ProblemeComponent } from './Component/probleme/probleme.component';
import { OrdinateurDetailComponent } from './Component/ordinateur-detail/ordinateur-detail.component';
import { ProblemeDetailComponent } from './Component/probleme-detail/probleme-detail.component';
import { LoginComponent } from './Component/login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: "Accueil",
    pathMatch: "full"
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'Accueil',
    component: AccueilComponent,
  },
  {
    path: 'Ordinateur',
    component: OrdinateurComponent,
  },
  {
    path: 'Probleme',
    component: ProblemeComponent,
  },
  {
    path: 'Ordinateur/:id',
    component: OrdinateurDetailComponent,
  },
  {
    path: 'Ordinateur/:id/:id',
    component: ProblemeDetailComponent,
  },
  {
    path: 'Probleme/:id',
    component: ProblemeDetailComponent,
  },
  {
    path: 'Utilisateur',
    component: ProblemeDetailComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
