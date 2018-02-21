import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-detalhe-noticia',
  templateUrl: './detalhe-noticia.component.html',
  styleUrls: ['./detalhe-noticia.component.css']
})
export class DetalheNoticiaComponent implements OnInit {
  id;
  dados: any =[];
  constructor(public route: ActivatedRoute, public service: PainelService) { 
    this.id = this.route.snapshot.params['id'];
    this.getNoticia();
  }

  ngOnInit() {
  }

  getNoticia(){
    this.service.getNoticiaid(this.id).subscribe((data)=>{
        this.dados = data;
        console.log(this.dados);

    },(err)=>{

    });

  }

}
