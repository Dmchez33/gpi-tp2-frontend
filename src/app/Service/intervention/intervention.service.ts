import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Intervention } from 'src/app/Interface/Intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  private apiUrl = 'http://localhost:8080/api/interventions';

  constructor(private http: HttpClient) { }


  getInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(this.apiUrl);
  }

  getInterventionById(id: any): Observable<Intervention[]> {
    let params = new HttpParams()
      .set('id', id)
    return this.http.get<Intervention[]>(`${this.apiUrl}/id`, { params });
  }

  getInterventionByProbleme(id: any): Observable<Intervention[]> {
    let params = new HttpParams()
      .set('idP', id)
    return this.http.get<Intervention[]>(`${this.apiUrl}/problemeId`, { params });
  }

  addIntervention(intervention: any): Observable<Intervention> {
    return this.http.post<Intervention>(this.apiUrl, intervention);
  }
}
