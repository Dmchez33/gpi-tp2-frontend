import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL de l'API pour l'authentification
  private apiUrl = 'http://localhost:8080/api/auth';

  // BehaviorSubject pour suivre l'utilisateur actuel
  public currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Récupération de l'utilisateur depuis le stockage local s'il existe
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  // Méthode pour définir l'utilisateur actuel et sauvegarder dans le stockage local
  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  // Méthode pour effacer l'utilisateur actuel du BehaviorSubject et du stockage local
  clearCurrentUser() {
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }

  // Méthode pour effectuer la requête de connexion à l'API
  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
