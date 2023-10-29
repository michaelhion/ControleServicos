import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Servico } from '../models/Servico.model';
import { IdNome } from '../models/IdNome.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  url=`${environment.url}/servicos`;
  token = localStorage.getItem('token');

  // headers = new HttpHeaders().set("Authorization", "bearer " + this.token);

   headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  listar(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.url,{headers:this.headers}).pipe(
      catchError(this.handleError))
  }

  buscarPorId(id: number): Observable<Servico> {
    return this.http.get<Servico>(this.url + "/" + id,{headers:this.headers}).pipe(
      catchError(this.handleError));

  }

  adicionar(serv: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.url, serv,{headers:this.headers}).pipe(
      catchError(this.handleError));
  }

  excluir(id: number): Observable<Servico> {
    return this.http.delete<Servico>(this.url + "/" + id,{headers:this.headers}).pipe(
      catchError(this.handleError));

  }


  listarIdNome(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.url + "/selecionaIdENomeCliente",{headers:this.headers}).pipe(
      catchError(this.handleError));
  }

}
