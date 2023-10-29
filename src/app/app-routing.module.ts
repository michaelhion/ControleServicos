import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ListarComponent } from './components/listar/listar.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { CadastroFaturamentoComponent } from './components/cadastro-faturamento/cadastro-faturamento.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {path:"home", component:HomeComponent,canActivate:[AuthGuard]},
  {path:"listar", component:ListarComponent,canActivate:[AuthGuard]},
  {path:"listarCliente", component:ListarClienteComponent,canActivate:[AuthGuard]},
  {path:"adicionar", component:AdicionarComponent,canActivate:[AuthGuard]},
  {path:"adicionar/:id", component:AdicionarComponent,canActivate:[AuthGuard]},
  {path:"cadastroCliente", component:CadastroClienteComponent,canActivate:[AuthGuard]},
  {path:"cadastroCliente/:id", component:CadastroClienteComponent,canActivate:[AuthGuard]},
  {path:"cadastroFatura", component:CadastroFaturamentoComponent,canActivate:[AuthGuard]},
  {path:"cadastroFatura/:id", component:CadastroFaturamentoComponent,canActivate:[AuthGuard]},
  {path:"faturamento/:id", component:FaturamentoComponent,canActivate:[AuthGuard]},
  {path:"faturamento", component:FaturamentoComponent,canActivate:[AuthGuard]},
  {path:"relatorio", component:RelatorioComponent,canActivate:[AuthGuard]},
  {path:"login", component:LoginComponent},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
