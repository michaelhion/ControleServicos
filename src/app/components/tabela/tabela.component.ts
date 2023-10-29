import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: 'tabela.component.html',
})
export class TabelaComponent {
  @ContentChildren('coluna') colunas!: QueryList<TemplateRef<any>>;
  @ContentChildren('header') headers!: QueryList<TemplateRef<any>>;
  @Input() dados: Array<any> | null = null;
}