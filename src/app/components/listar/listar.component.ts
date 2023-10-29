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

// fileName= 'Faturamento_Aline.xlsx';

  // nrMes!:number;
  // meses= [
  //   {id:1,name:"janeiro"},
  //   {id:2,name:"fevereiro"},
  //   {id:3,name:"marco"},
  //   {id:4,name:"abril"},
  //   {id:5,name:"maio"},
  //   {id:6,name:"junho"},
  //   {id:7,name:"julho"},
  //   {id:8,name:"agosto"},
  //   {id:9,name:"setembro"},
  //   {id:10,name:"outubro"},
  //   {id:11,name:"novembro"},
  //   {id:12,name:"dezembro"}
  // ]
  listaServico! : Servico[];
  valorTotal! : number;
  valorTotalComissao! : number;
  valorTotalLiquido! : number;
  titulo = ['Nome', 'Valor','Ações'];
  constructor(
    private service :ServicosService
  ) { }

  ngOnInit(): void {
    console.log(this.listaServico);
    
    this.listar();
    
  }

  
  listar(){
    this.service.listar().subscribe(resp => this.listaServico = resp);
    console.log(this.listaServico);
  }
  excluir(id:number){
    this.service.excluir(id).subscribe(
      response => {
        this.listaServico = this.listaServico.filter(item => item.id !== id);
  });
}

filtrar(id:any){
  console.log(id);
  
}

// toNumber(){
//   this.nrMes = +this.nrMes;
// }

// exportexcel(): void 
//     {
//        /* table id is passed over here */   
//        let element = document.getElementById('excel-table'); 
//        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

//        /* generate workbook and add the worksheet */
//        const wb: XLSX.WorkBook = XLSX.utils.book_new();
//        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

//        /* save to file */
//        XLSX.writeFile(wb, this.fileName);
			
//     }
}
