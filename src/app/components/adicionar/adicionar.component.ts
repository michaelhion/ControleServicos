import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from 'src/app/models/Servico.model';
import { ServicosService } from 'src/app/services/servicos.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  servico: Servico = new Input
  id: any;

  constructor(
    private service: ServicosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.service.buscarPorId(this.id).subscribe(data => this.servico = data);
    console.log(this.servico);
  }

  adicionar(serv: Servico) {


    this.service.adicionar(serv).subscribe();
    this.router.navigate(['listar']).then(() => {
      window.location.reload();
    });
  }

}
