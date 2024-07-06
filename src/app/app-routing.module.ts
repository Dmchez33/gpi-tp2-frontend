import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Component/accueil/accueil.component';
import { OrdinateurComponent } from './Component/ordinateur/ordinateur.component';
import { ProblemeComponent } from './Component/probleme/probleme.component';
import { OrdinateurDetailComponent } from './Component/ordinateur-detail/ordinateur-detail.component';
import { ProblemeDetailComponent } from './Component/probleme-detail/probleme-detail.component';
import { LoginComponent } from './Component/login/login.component';
import { AuthGuard } from './guards/auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path: '', redirectTo: "Accueil", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'Accueil', component: AccueilComponent, canActivate: [AuthGuard] },
  { path: 'Ordinateur', component: OrdinateurComponent, canActivate: [AuthGuard] },
  { path: 'Probleme', component: ProblemeComponent, canActivate: [AuthGuard] },
  { path: 'Ordinateur/:id', component: OrdinateurDetailComponent, canActivate: [AuthGuard] },
  { path: 'Ordinateur/:id/:id', component: ProblemeDetailComponent, canActivate: [AuthGuard] },
  { path: 'Probleme/:id', component: ProblemeDetailComponent, canActivate: [AuthGuard] },
  { path: 'Utilisateur', component: ProblemeDetailComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
