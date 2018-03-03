import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-ajuda-mutua',
  templateUrl: './ajuda-mutua.component.html',
  styleUrls: ['./ajuda-mutua.component.css']
})
export class AjudaMutuaComponent implements OnInit {

  lista: any=[];
  topo: any = [];

  constructor(public service: PainelService) {
    this.getFila(1);
   }

  ngOnInit() {
  }


  getFila(tipo){
    this.getTopoFila(tipo);
    this.service.getFila(tipo).then((data)=>{
        this.lista = data;

    },(err)=>{

    });

  
}




getTopoFila(tipo){
  this.service.getTopoFila(tipo).then((data)=>{
      this.topo = data;

  },(err)=>{

  });


}


doar(item){
  
}

}
