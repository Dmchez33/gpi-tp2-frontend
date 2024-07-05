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


  getOrdinateurs(): Observable<Ordinateur[]> {
    return this.http.get<Ordinateur[]>(this.apiUrl);
  }
  getOrdinateurById(id:any): Observable<Ordinateur[]> {
    let params = new HttpParams()
      .set('id', id)
    return this.http.get<Ordinateur[]>(this.apiUrl+'/id',{params});
  }

  addOrdinateur(ordinateur: any): Observable<Ordinateur> {
    return this.http.post<Ordinateur>(this.apiUrl, ordinateur);
  }
}
