import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './Service/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-responsive-sidenav';

  // Référence au composant MatSidenav pour le contrôle du panneau latéral
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  // Déclaration des variables de contrôle
  isMobile = true;
  isCollapsed = false;
  currentUser!: any;
  isLoginPage = false;
  isInfoService = false;
  isAdmin = false;

  constructor(private observer: BreakpointObserver, private router: Router, private authService: AuthService) {
    // Écoute des événements de navigation pour déterminer si la page de connexion est active
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.urlAfterRedirects.includes('/login');
    });

    // Abonnement aux changements d'utilisateur pour mettre à jour les rôles et les autorisations
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      if(this.currentUser.role == 'Technicien' || this.currentUser.role == 'Admin'){
        this.isInfoService = true;
      }
      if(this.currentUser.role == 'Admin'){
        this.isAdmin = true;
      }
    });
  }

  ngOnInit() {
    // Masquage de l'écran de chargement au démarrage de l'application
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
      splashScreen.classList.add('hidden');
    }

    // Observation du changement de taille d'écran pour ajuster le mode d'affichage mobile
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });

    
  }

  // Fonction pour basculer le menu latéral
  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle(); // Sur mobile, ouvre ou ferme le panneau latéral
    } else {
      this.sidenav.open(); // Sur desktop/tablette, le menu ne peut jamais être complètement fermé
      this.isCollapsed = !this.isCollapsed; // Bascule l'état de réduction du menu
    }
  }

  // Fonction de déconnexion de l'utilisateur
  logout() {
    this.authService.clearCurrentUser(); // Efface l'utilisateur actuellement connecté
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }

  
}
