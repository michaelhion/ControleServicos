import { Component, OnInit } from '@angular/core';
import { Faturamento } from 'src/app/models/Faturamento';
import { FaturamentoService } from 'src/app/services/faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit {
  faturamento!:Faturamento[];
  titulo = ['Nome', 'Valor','Ações'];
  colunas = [
    { name: 'id', type: 'number' },
    { name: 'cliente id', type: 'number' },
    { name: 'servico id', type: 'number' },
  ]
  constructor(
    private service : FaturamentoService
  ) { }

  ngOnInit(): void {
    this.listar();
  }


  listar(){
    this.service.listarFaturamento().subscribe(resp=>
      this.faturamento = resp);
  }

  excluir(id:number){
    this.service.excluir(id).subscribe(
      response => {
        this.faturamento = this.faturamento.filter(item => item.id !== id);
  }
    );
  }
}
