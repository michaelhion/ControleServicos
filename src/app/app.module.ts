import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { FaturamentoComponent } from './components/faturamento/faturamento.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { CadastroFaturamentoComponent } from './components/cadastro-faturamento/cadastro-faturamento.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { LoginComponent } from './components/login/login.component';
import { CorsInterceptor } from './services/CorsInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AdicionarComponent,
    HeaderComponent,
    CadastroClienteComponent,
    ListarClienteComponent,
    HomeComponent,
    FaturamentoComponent,
    TabelaComponent,
    CadastroFaturamentoComponent,
    RelatorioComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem("token");
        },
      },
    },
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CorsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
