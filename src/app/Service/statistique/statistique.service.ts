import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  private apiUrl = 'http://localhost:8080/api/statistiques';

  constructor(private http: HttpClient) { }

  /**
   * Récupère le nombre de problèmes par système d'exploitation depuis l'API.
   * @returns Observable<any[]> Un tableau contenant les données du nombre de problèmes par système d'exploitation.
   */
  getNombreProblemesParSE(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/problemes-par-se`);
  }

  /**
   * Récupère la durée moyenne d'intervention depuis l'API.
   * @returns Observable<number> La durée moyenne d'intervention.
   */
  getDelaiMoyenIntervention(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/duree-moyenne-intervention`);
  }

  /**
   * Récupère la fréquence des problèmes sur une période spécifiée depuis l'API.
   * @param start Date de début au format string (YYYY-MM-DD).
   * @param end Date de fin au format string (YYYY-MM-DD).
   * @returns Observable<any[]> Un tableau contenant les données de fréquence des problèmes.
   */
  getFrequenceProbleme(start: string, end: string): Observable<any[]> {
    let params = new HttpParams()
      .set('startDate', start)
      .set('endDate', end);

    return this.http.get<any[]>(`${this.apiUrl}/problemes-par-frequence`, { params });
  }

  /**
   * Récupère les fréquences des problèmes sur une période spécifiée depuis l'API.
   * @param start Date de début au format string (YYYY-MM-DD).
   * @param end Date de fin au format string (YYYY-MM-DD).
   * @returns Observable<any[]> Un tableau contenant les données de fréquences des problèmes.
   */
  getFrequenceProblemes(start: string, end: string): Observable<any[]> {
    let params = new HttpParams()
      .set('startDate', start)
      .set('endDate', end);

    return this.http.get<any[]>(`${this.apiUrl}/problemes-par-frequences`, { params });
  }
}
