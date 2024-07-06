import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  /**
   * Constructeur pour le AuthGuard.
   * @param authService Service d'authentification pour vérifier l'utilisateur actuel.
   * @param router Service de routage pour la navigation.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * Détermine si une route peut être activée.
   * @param next L'instantané de la route activée.
   * @param state L'état du routeur au moment de la tentative de navigation.
   * @returns Un Observable, une Promesse ou un booléen indiquant si la route peut être activée.
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Obtient l'utilisateur actuel depuis le service d'authentification
    const currentUser = this.authService.currentUserSubject.value;
    if (currentUser) {
      // Si l'utilisateur est authentifié, autorise l'activation de la route
      return true;
    }
    
    // Si l'utilisateur n'est pas authentifié, redirige vers la page de connexion
    this.router.navigate(['/login']);
    return false;
  }
}
