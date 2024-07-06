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

  /**
   * Récupère toutes les interventions depuis l'API.
   * @returns Observable<Intervention[]> Un tableau d'objets Intervention.
   */
  getInterventions(): Observable<Intervention[]> {
    return this.http.get<Intervention[]>(this.apiUrl);
  }

  /**
   * Récupère une intervention spécifique par son identifiant depuis l'API.
   * @param id L'identifiant de l'intervention à récupérer.
   * @returns Observable<Intervention[]> Un tableau d'objets Intervention correspondant à l'identifiant donné.
   */
  getInterventionById(id: any): Observable<Intervention[]> {
    let params = new HttpParams()
      .set('id', id);
    return this.http.get<Intervention[]>(`${this.apiUrl}/${id}`, { params });
  }

  /**
   * Récupère toutes les interventions associées à un problème spécifique depuis l'API.
   * @param id L'identifiant du problème pour lequel récupérer les interventions.
   * @returns Observable<Intervention[]> Un tableau d'objets Intervention associés au problème spécifié.
   */
  getInterventionByProbleme(id: any): Observable<Intervention[]> {
    let params = new HttpParams()
      .set('idP', id);
    return this.http.get<Intervention[]>(`${this.apiUrl}/problemeId`, { params });
  }

  /**
   * Ajoute une nouvelle intervention à l'API.
   * @param intervention Les données de l'intervention à ajouter.
   * @returns Observable<Intervention> L'intervention ajoutée.
   */
  addIntervention(intervention: any): Observable<Intervention> {
    return this.http.post<Intervention>(this.apiUrl, intervention);
  }
}
