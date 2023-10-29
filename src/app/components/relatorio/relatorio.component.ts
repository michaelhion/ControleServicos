import { Component, OnInit } from '@angular/core';
import { Faturamento } from 'src/app/models/Faturamento';
import { FaturamentoService } from 'src/app/services/faturamento.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  dataInicio!: string; 
  dataFim!: string;
  intervalo15!: boolean;
  intervalo30!: boolean;
  usarDataAtual!: boolean;
  faturamento! : Faturamento[]
  constructor(
    private service : FaturamentoService
  ) { }

  ngOnInit(): void {
  }

  atualizarDatas() {
    if (this.usarDataAtual) {
      const hoje = new Date();
      this.dataInicio = hoje.toISOString().substr(0, 10);
      this.dataFim = hoje.toISOString().substr(0, 10);
    } else if (this.dataInicio) {
      const inicio = new Date(this.dataInicio);
      let intervalo = 15;

      if (this.intervalo30) {
        intervalo = 30;
      }

      const novaDataFim = new Date(inicio);
      novaDataFim.setDate(inicio.getDate() + intervalo);

      this.dataFim = novaDataFim.toISOString().substr(0, 10);
    }
  }
  limparSelecao() {
    this.dataInicio = '';
    this.dataFim = '';
    this.intervalo15 = false;
    this.intervalo30 = false;
    this.usarDataAtual = false;
  }

  gerarRelatorio(){
    this.service.listarFaturamentoPorData(this.formatarData(this.dataInicio),this.formatarData(this.dataFim)).subscribe(resp=>{
      this.faturamento = resp
      // console.log(this.faturamento);
      this.exportarExcel()
    })
  }

  formatarData(data: string): string {
    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = dataObj.getMonth() + 1; // Lembre-se que os meses em JavaScript começam do zero
    const ano = dataObj.getFullYear();

    const diaFormatado = dia < 10 ? `0${dia}` : dia;
    const mesFormatado = mes < 10 ? `0${mes}` : mes;

    return `${ano}-${mesFormatado}-${diaFormatado}`;
  }

  formatarDataBr(data: string): string {
    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = dataObj.getMonth() + 1; // Lembre-se que os meses em JavaScript começam do zero
    const ano = dataObj.getFullYear();
  
    const diaFormatado = dia < 10 ? `0${dia}` : dia;
    const mesFormatado = mes < 10 ? `0${mes}` : mes;
  
    return `${diaFormatado}/${mesFormatado}/${ano}`;
  }
  exportarExcel() {
    const data: any[][] = [
      ['Nome da Cliente', 'Nome do Serviço', 'Valor','Data'],
      // Preencha com os dados da API
      // Por exemplo: ['Dado 1', 'Dado 2', 'Dado 3'],
    ];
  
    for (const faturamento of this.faturamento) {
      const dataFormatada = this.formatarDataBr(faturamento.data);
      data.push([faturamento.nomeCliente, faturamento.nomeServico, faturamento.valor,dataFormatada]);
    }
  
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Faturamento');
  
    
    XLSX.writeFile(wb, 'faturamento.xlsx');
  }
}
