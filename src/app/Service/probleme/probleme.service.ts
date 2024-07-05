import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Probleme } from 'src/app/Interface/Probleme';

@Injectable({
  providedIn: 'root'
})
export class ProblemeService {

  private apiUrl = 'http://localhost:8080/api/problemes';

  constructor(private http: HttpClient) { }


  getProblemes(): Observable<Probleme[]> {
    return this.http.get<Probleme[]>(this.apiUrl);
  }
  getProblemeById(id:any): Observable<Probleme[]> {
    let params = new HttpParams()
      .set('id', id)
    return this.http.get<Probleme[]>(`${this.apiUrl}/id`,{params});
  }

  getProblemeByOrdinateur(id:any): Observable<Probleme[]> {
    let params = new HttpParams()
      .set('ordiId', id)
    return this.http.get<Probleme[]>(`${this.apiUrl}/ordinateurId`,{params});
  }

  addProbleme(probleme: any): Observable<Probleme> {
    return this.http.post<Probleme>(this.apiUrl, probleme);
  }
}
