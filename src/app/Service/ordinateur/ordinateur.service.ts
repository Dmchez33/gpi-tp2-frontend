import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordinateur } from 'src/app/Interface/Ordinateur';

@Injectable({
  providedIn: 'root'
})
export class OrdinateurService {

  private apiUrl = 'http://localhost:8080/api/ordinateurs';

  constructor(private http: HttpClient) { }

  /**
   * Récupère tous les ordinateurs depuis l'API.
   * @returns Observable<Ordinateur[]> Un tableau d'objets Ordinateur.
   */
  getOrdinateurs(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(this.apiUrl);
  }

  /**
   * Récupère un ordinateur spécifique par son identifiant depuis l'API.
   * @param id L'identifiant de l'ordinateur à récupérer.
   * @returns Observable<Ordinateur[]> Un tableau d'objets Ordinateur correspondant à l'identifiant donné.
   */
  getOrdinateurById(id: any): Observable<Ordinateur[]> {
    let params = new HttpParams()
      .set('id', id);
    return this.http.get<Ordinateur[]>(`${this.apiUrl}/${id}`, { params });
  }

  /**
   * Ajoute un nouvel ordinateur à l'API.
   * @param ordinateur Les données de l'ordinateur à ajouter.
   * @returns Observable<Ordinateur> L'ordinateur ajouté.
   */
  addOrdinateur(ordinateur: any): Observable<Ordinateur> {
    return this.http.post<Ordinateur>(this.apiUrl, ordinateur);
  }
}
