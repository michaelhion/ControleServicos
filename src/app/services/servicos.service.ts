import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from '../models/Servico.model';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  url='http://localhost:8080/servicos'

  constructor(private http : HttpClient) { }


  listar(): Observable<Servico[]>{
    return this.http.get<Servico[]>(this.url);
    
  }

  total(): Observable<number>{
    return this.http.get<number>(this.url+"/total");
    
  }

  totalComissao(): Observable<number>{
    return this.http.get<number>(this.url+"/totalcomissao");
    
  }

  totalLiquido(): Observable<number>{
    return this.http.get<number>(this.url+"/totalliquido");
    
  }


  buscarPorId(id:number): Observable<Servico>{
  return this.http.get<Servico>(this.url+ "/"+id );
    
  }

  adicionar(serv :Servico):Observable<Servico>{
    console.log("log servico :: " , serv);
    
    return this.http.post<Servico>(this.url,serv);
  }

  excluir(id:number): Observable<Servico>{
    return this.http.delete<Servico>(this.url+ "/"+id );
      
    }

  buscarPorMes(nrMes:number): Observable<Servico[]>{
    return this.http.get<Servico[]>(this.url+"/mes/"+nrMes);
    
  }
}
