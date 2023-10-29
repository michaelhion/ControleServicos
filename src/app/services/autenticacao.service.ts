import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(public jwtHelper: JwtHelperService) {}
  
  public isAuthenticated(): boolean {
    const token = JSON.stringify(localStorage.getItem('token'));
    return !this.jwtHelper.isTokenExpired(token);
    
  }
}
