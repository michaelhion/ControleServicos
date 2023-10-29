import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes!: Cliente[];
  constructor(
    private service :ClienteServiceService
  ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe(resp => this.clientes = resp);
    console.log(this.clientes);
  }

  excluir(id:number){
    this.service.excluir(id).subscribe(
      response => {
        this.clientes = this.clientes.filter(item => item.id !== id);
  });
}

}
