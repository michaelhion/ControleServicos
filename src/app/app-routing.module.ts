import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ListarComponent } from './components/listar/listar.component';

const routes: Routes = [
  {path:"", component:ListarComponent},
  {path:"listar", component:ListarComponent},
  {path:"adicionar", component:AdicionarComponent},
  {path:"adicionar/:id", component:AdicionarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
