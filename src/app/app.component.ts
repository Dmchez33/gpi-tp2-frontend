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
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = false;
  currentUser!: any;
  isLoginPage = false;
  isInfoService = false;
  isAdmin = false;

  constructor(private observer: BreakpointObserver, private router: Router, private authService: AuthService) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = event.urlAfterRedirects.includes('/login');
    });

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
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
      splashScreen.classList.add('hidden');
    }
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });
    // const storedUser = localStorage.getItem('currentUser');
    // if (storedUser) {
    //   this.currentUser = JSON.parse(storedUser);
    // }
  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  logout() {
    this.authService.clearCurrentUser();
    this.router.navigate(['/login']);
  }

  // navigateToLogin() {
  //   this.router.navigate(['/login']);
  // }
}
