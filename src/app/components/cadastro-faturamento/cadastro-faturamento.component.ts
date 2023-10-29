import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/Cliente.model';
import { Formulario } from 'src/app/models/Formulario';
import { Faturamento } from 'src/app/models/Faturamento';

import { IdNome } from 'src/app/models/IdNome.model';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { FaturamentoService } from 'src/app/services/faturamento.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { Servico } from 'src/app/models/Servico.model';

@Component({
  selector: 'app-cadastro-faturamento',
  templateUrl: './cadastro-faturamento.component.html',
  styleUrls: ['./cadastro-faturamento.component.css']
})
export class CadastroFaturamentoComponent implements OnInit {
  faturamento : Faturamento = new Input;
  cliente !: IdNome[];
  servico !: Servico[];
  servicoSelecionado!: Servico; 
  clienteSelecionado: any; 
  

  constructor(
    private service : FaturamentoService,
    private clienteService : ClienteServiceService,
    private servicoService : ServicosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listarClientes();
    this.listarServicos();
    console.log(this.servico);
    
  }

   listarClientes(){
    this.clienteService.listarIdNome().subscribe(resp =>{
      this.cliente = resp
    });
  }
  listarServicos(){
    this.servicoService.listar().subscribe(resp =>{
      this.servico = resp
    });
  }
  
  adicionar(faturamento : Faturamento){
    
    this.service.adicionar(this.faturamento).subscribe();
    this.router.navigate(['/faturamento']).then(() => {
      window.location.reload();
    });
  }

  atualizarValor() {
    
    if(this.servicoSelecionado){
      this.faturamento.servicoId = this.servicoSelecionado.id;
      this.faturamento.valor = this.servicoSelecionado.valor;
      console.log(this.faturamento.valor);
      
    }
    if(this.clienteSelecionado){
      
      this.faturamento.nomeCliente = this.clienteSelecionado.nome;
      this.faturamento.clienteId = this.clienteSelecionado.id;

    }
  
  }

  onFormSubmit(formData: any) {
    this.adicionar(formData);
  }

}
