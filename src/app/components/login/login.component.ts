import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtModel } from 'src/app/models/JwtModel.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  jwtModel: JwtModel = new Input;

  constructor(
    private service : LoginService,
    private authService : AutenticacaoService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }

  login(jwtModel : JwtModel){
    this.service.login(jwtModel.login,jwtModel.senha).subscribe(
      (data)=>{
        localStorage.setItem('token', data.token);
        this.router.navigate(['home']);
        this.authService.isAuthenticated();
      } 
    );
    ;
  }

}
