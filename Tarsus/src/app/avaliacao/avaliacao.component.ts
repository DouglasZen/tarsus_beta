import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  nome : String;
  
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getLocal();
  }

  getLocal(): void{
    this.route.params.subscribe(params =>{
       this.nome = params["nome"];
       let codigo = params["codigo"];
    })
  }
}
