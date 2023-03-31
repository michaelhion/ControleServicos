import { Component, OnInit } from '@angular/core';
import { Servico } from 'src/app/models/Servico.model';
import { ServicosService } from 'src/app/services/servicos.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

fileName= 'Faturamento_Aline.xlsx';

  nrMes!:number;
  meses= [
    {id:1,name:"janeiro"},
    {id:2,name:"fevereiro"},
    {id:3,name:"marco"},
    {id:4,name:"abril"},
    {id:5,name:"maio"},
    {id:6,name:"junho"},
    {id:7,name:"julho"},
    {id:8,name:"agosto"},
    {id:9,name:"setembro"},
    {id:10,name:"outubro"},
    {id:11,name:"novembro"},
    {id:12,name:"dezembro"}
  ]
  servico! : Servico[];
  valorTotal! : number;
  valorTotalComissao! : number;
  valorTotalLiquido! : number;
  constructor(
    private service :ServicosService
  ) { }

  ngOnInit(): void {
    this.listar();
    this.total();
    this.totalComissao();
    this.totalLiquido();
  }

  total(){
    this.service.total().subscribe(resp => this.valorTotal = resp);
    console.log(this.servico);
  }
  totalComissao(){
    this.service.totalComissao().subscribe(resp => this.valorTotalComissao = resp);
    console.log(this.servico);
  }
  totalLiquido(){
    this.service.totalLiquido().subscribe(resp => this.valorTotalLiquido = resp);
    console.log(this.servico);
  }
  listar(){
    this.service.listar().subscribe(resp => this.servico = resp);
    console.log(this.servico);
  }
  excluir(id:number){
    this.service.excluir(id).subscribe(
      response => {
        this.servico = this.servico.filter(item => item.id !== id);
  });
}

filtrar(id:any){
  console.log(id);
  
}

toNumber(){
  this.nrMes = +this.nrMes;
  this.service.buscarPorMes(this.nrMes).subscribe(resp => this.servico = resp);
}

exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
}
