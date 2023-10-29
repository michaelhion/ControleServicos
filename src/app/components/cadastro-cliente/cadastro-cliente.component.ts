import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { DateUtils } from 'src/app/utils/DateUtils';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  cliente: Cliente = new Input;
  id: any;
  data! : number;
  constructor(
    private service: ClienteServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.service.buscarPorId(this.id).subscribe(data => {this.cliente = data;
      this.cliente.dataNascimento = this.converterDataParaFormatoDate(this.cliente.dataNascimento);
      console.log(this.cliente.dataNascimento);
      
      });
    ;
    console.log(this.cliente);
  }

  converterDataParaFormatoDate(dataString: string): string {
    const data = new Date(dataString);
    const ano = data.getUTCFullYear();
    const mes = ('0' + (data.getUTCMonth() + 1)).slice(-2);
    const dia = ('0' + data.getUTCDate()).slice(-2);
    let dataF = `${ano}-${mes}-${dia}`
    console.log(dataF);
    
    return dataF;
  }

  adicionar(cli: Cliente) {
    this.service.adicionar(cli).subscribe();
    this.router.navigate(['listarCliente']).then(() => {
      window.location.reload();
    });
  }

}
