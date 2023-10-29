import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faturamento } from '../models/Faturamento';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  url=`${environment.url}/faturamento`
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

  listar(): Observable<Faturamento[]>{
    return this.http.get<Faturamento[]>(this.url+"/listar",{headers:this.headers}).pipe(
      catchError(this.handleError));
    
  }
  listarFaturamento(): Observable<Faturamento[]>{
    return this.http.get<Faturamento[]>(this.url+"/listarFaturamento",{headers:this.headers}).pipe(
      catchError(this.handleError));
    
  }
  listarFaturamentoPorData(dtInicio : string,dtFim : string): Observable<Faturamento[]>{
    return this.http.get<Faturamento[]>(this.url+"/listarFaturamento"+`/${dtInicio}/${dtFim}`,{headers:this.headers}).pipe(
      catchError(this.handleError));
    
  }

  buscarPorId(id:number): Observable<Faturamento>{
  return this.http.get<Faturamento>(this.url+ "/listarPorId/"+id,{headers:this.headers}).pipe(
    catchError(this.handleError));
    
  }

  adicionar(serv :Faturamento):Observable<Faturamento>{
    return this.http.post<Faturamento>(this.url,serv,{headers:this.headers}).pipe(
      catchError(this.handleError));
  }

  excluir(id:number): Observable<Faturamento>{
    return this.http.delete<Faturamento>(this.url+ "/deletar/"+id,{headers:this.headers} ).pipe(
      catchError(this.handleError));
      
    }
}
