import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Cliente } from '../models/Cliente.model';
import { IdNome } from '../models/IdNome.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  url=`${environment.url}/clientes`
  token = localStorage.getItem('token');

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });
  
  constructor(private http : HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url,{headers:this.headers}).pipe(
      catchError(this.handleError));
    
  }
  listarIdNome(): Observable<IdNome[]>{
    return this.http.get<IdNome[]>(this.url+"/selecionaIdENomeCliente",{headers:this.headers}).pipe(
      catchError(this.handleError));
    
  }
  listarIdNomePorId(id:number): Observable<IdNome>{
    return this.http.get<IdNome>(this.url+"/selecionaIdENomeClientePorId/" + id,{headers:this.headers}).pipe(
      catchError(this.handleError));
    
  }

  buscarPorId(id:number): Observable<Cliente>{
  return this.http.get<Cliente>(this.url+ "/"+id,{headers:this.headers}).pipe(
    catchError(this.handleError));
    
  }

  adicionar(serv :Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url,serv,{headers:this.headers}).pipe(
      catchError(this.handleError));
  }

  excluir(id:number): Observable<Cliente>{
    return this.http.delete<Cliente>(this.url+ "/"+id,{headers:this.headers}).pipe(
      catchError(this.handleError));
      
    }
}
