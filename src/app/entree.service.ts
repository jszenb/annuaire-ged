import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Entree } from './entree';


@Injectable({
  providedIn: 'root'
})
export class EntreeService {
  baseUrl = 'https://outils-test.campus-condorcet.fr/ged-acq-elec';
  entrees: Entree[];

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Entree[]> {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res) => {
        this.entrees = res['data'];
        return this.entrees;
    }),
    catchError(this.handleError));
  }
  
  store(entree: Entree): Observable<Entree[]> {
    return this.http.post(`${this.baseUrl}/store.php`, { data: entree })
      .pipe(map((res) => {
        this.entrees.push(res['data']);
        return this.entrees;
      }),
      catchError(this.handleError));
  }
  
  update(entree: Entree): Observable<Entree[]> {
    return this.http.put(`${this.baseUrl}/update.php`, { data: entree })
      .pipe(map((res) => {
          const theEntree = this.entrees.find((item) => {
            return +item['id'] === +entree['id']; 
        });
        if (theEntree) {
          theEntree['prenom'] = entree['prenom'];
          theEntree['nom'] = entree['nom'];
        }
        return this.entrees;
      }),
      catchError(this.handleError));
  }
  
 delete(id: number): Observable<Entree[]> {
    const params = new HttpParams()
      .set('id', id.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params })
      .pipe(map(res => {
        const filteredEntrees = this.entrees.filter((entree) => {
          return +entree['id'] !== +id;
        });
        return this.entrees = filteredEntrees;
      }),
      catchError(this.handleError));
  } 
  
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  
  
}
