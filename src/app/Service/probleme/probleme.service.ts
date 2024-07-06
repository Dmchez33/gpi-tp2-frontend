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

  /**
   * Récupère tous les problèmes depuis l'API.
   * @returns Observable<Probleme[]> Un tableau d'objets Probleme.
   */
  getProblemes(): Observable<Probleme[]> {
    return this.http.get<Probleme[]>(this.apiUrl);
  }

  /**
   * Récupère un problème spécifique par son identifiant depuis l'API.
   * @param id L'identifiant du problème à récupérer.
   * @returns Observable<Probleme[]> Un tableau d'objets Probleme correspondant à l'identifiant donné.
   */
  getProblemeById(id: any): Observable<Probleme[]> {
    let params = new HttpParams()
      .set('id', id);
    return this.http.get<Probleme[]>(`${this.apiUrl}/${id}`, { params });
  }

  /**
   * Récupère tous les problèmes liés à un ordinateur spécifique depuis l'API.
   * @param id L'identifiant de l'ordinateur pour lequel récupérer les problèmes.
   * @returns Observable<Probleme[]> Un tableau d'objets Probleme liés à l'ordinateur donné.
   */
  getProblemeByOrdinateur(id: any): Observable<Probleme[]> {
    let params = new HttpParams()
      .set('ordiId', id);
    return this.http.get<Probleme[]>(`${this.apiUrl}/ordinateurId`, { params });
  }

  /**
   * Ajoute un nouveau problème à l'API.
   * @param probleme Les données du problème à ajouter.
   * @returns Observable<Probleme> Le problème ajouté.
   */
  addProbleme(probleme: any): Observable<Probleme> {
    return this.http.post<Probleme>(this.apiUrl, probleme);
  }
}
