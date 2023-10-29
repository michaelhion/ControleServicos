import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public auth: AutenticacaoService, public router: Router) {}

  canActivate(): boolean{
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }
  
}
