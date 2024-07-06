import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Service/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup; // Formulaire de connexion défini avec FormBuilder
  errorMessage: string | null = null; // Message d'erreur affiché en cas d'échec de connexion

  constructor(
    private authService: AuthService, // Service d'authentification
    private fb: FormBuilder, // FormBuilder pour la création du formulaire
    private router: Router // Router pour la navigation
  ) {
    this.loginForm = this.fb.group({
      username: [''], // Champ du nom d'utilisateur initialisé à vide
      password: [''] // Champ du mot de passe initialisé à vide
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        if (data) { // Si la connexion réussit
          this.authService.setCurrentUser(data); // Définit l'utilisateur actuel via le service d'authentification

          // Redirection en fonction du rôle de l'utilisateur
          if (data.role === 'Utilisateur') {
            this.router.navigate(['/Ordinateur']); // Redirige vers la page Ordinateur
          } else if (data.role === 'Technicien') {
            this.router.navigate(['/Accueil']); // Redirige vers la page Accueil
          } else {
            this.router.navigate(['/Admin']); // Redirige vers la page Admin
          }
        } else {
          this.errorMessage = "Nom d'utilisateur ou Mot de passe Invalide"; // Affiche un message d'erreur si les informations de connexion sont invalides
        }
      },
      error => {
        this.errorMessage = 'Erreur: le serveur ne repond pas !'; // Affiche un message d'erreur en cas d'erreur lors de la connexion
      }
    );
  }
}
