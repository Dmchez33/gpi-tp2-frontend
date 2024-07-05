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


  getSolutions(): Observable<Solution[]> {
    return this.http.get<Solution[]>(this.apiUrl);
  }
  getSolutionById(id:any): Observable<Solution[]> {
    let params = new HttpParams()
      .set('id', id)
    return this.http.get<Solution[]>(`${this.apiUrl}/id`,{params});
  }

  getSolutionByProbleme(id:any): Observable<Solution[]> {
    let params = new HttpParams()
      .set('idP', id)
    return this.http.get<Solution[]>(`${this.apiUrl}/problemeId`,{params});
  }

  addSolution(solution: any): Observable<Solution> {
    return this.http.post<Solution>(this.apiUrl, solution);
  }
}
