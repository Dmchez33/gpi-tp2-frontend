import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  private apiUrl = 'http://localhost:8080/api/statistiques';

  constructor(private http: HttpClient) { }

  getNombreProblemesParSE(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/problemes-par-se`);
  }

  getDelaiMoyenIntervention(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/duree-moyenne-intervention`);
  }

  getFrequenceProbleme(start: string, end: string): Observable<any[]> {
    let params = new HttpParams()
      .set('startDate', start)
      .set('endDate', end);

    return this.http.get<any[]>(`${this.apiUrl}/problemes-par-frequence`, { params });
  }

  getFrequenceProblemes(start: string, end: string): Observable<any[]> {
    let params = new HttpParams()
      .set('startDate', start)
      .set('endDate', end);

    return this.http.get<any[]>(`${this.apiUrl}/problemes-par-frequences`, { params });
  }
}
