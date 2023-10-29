import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private router: Router,
    private auth : AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  sair(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  mostraMenu():boolean{
    if(localStorage.getItem('token')){
      return true
    }
    return false
  }
}
