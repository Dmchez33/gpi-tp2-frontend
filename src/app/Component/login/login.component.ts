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
  loginForm: FormGroup;
  errorMessage: string | null = null;
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        if (data) {
          
          this.authService.setCurrentUser(data);
          if(data.role == 'Utilisateur'){
            this.router.navigate(['/Ordinateur']);
          }else if( data.role == 'Technicien'){
            this.router.navigate(['/Accueil']);
          }else{
            this.router.navigate(['/Admin']); 
          }
          
          
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      },
      error => {
        this.errorMessage = 'Error logging in';
      }
    );
  }
}
