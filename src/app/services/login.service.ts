import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtModel } from '../models/JwtModel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url=`${environment.url}/login`;
 

  constructor(private http: HttpClient) { }

  login(login: string, senha : string): Observable<JwtModel>{
    
    return this.http.post<JwtModel>(this.url, {login,senha});
  }
}
