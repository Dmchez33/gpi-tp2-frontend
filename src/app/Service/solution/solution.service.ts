import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from 'src/app/Interface/Solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private apiUrl = 'http://localhost:8080/api/solutions';

  constructor(private http: HttpClient) { }

  /**
   * Récupère toutes les solutions depuis l'API.
   * @returns Observable<Solution[]> Un tableau d'objets Solution.
   */
  getSolutions(): Observable<Solution[]> {
    return this.http.get<Solution[]>(this.apiUrl);
  }

  /**
   * Récupère une solution spécifique par son identifiant depuis l'API.
   * @param id L'identifiant de la solution à récupérer.
   * @returns Observable<Solution[]> Un tableau d'objets Solution correspondant à l'identifiant donné.
   */
  getSolutionById(id: any): Observable<Solution[]> {
    let params = new HttpParams()
      .set('id', id);
    return this.http.get<Solution[]>(`${this.apiUrl}/${id}`, { params });
  }

  /**
   * Récupère toutes les solutions liées à un problème spécifique depuis l'API.
   * @param id L'identifiant du problème pour lequel récupérer les solutions.
   * @returns Observable<Solution[]> Un tableau d'objets Solution liés au problème donné.
   */
  getSolutionByProbleme(id: any): Observable<Solution[]> {
    let params = new HttpParams()
      .set('idP', id);
    return this.http.get<Solution[]>(`${this.apiUrl}/problemeId`, { params });
  }

  /**
   * Ajoute une nouvelle solution à l'API.
   * @param solution Les données de la solution à ajouter.
   * @returns Observable<Solution> La solution ajoutée.
   */
  addSolution(solution: any): Observable<Solution> {
    return this.http.post<Solution>(this.apiUrl, solution);
  }
}
