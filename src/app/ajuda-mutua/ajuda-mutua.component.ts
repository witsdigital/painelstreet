import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-ajuda-mutua',
  templateUrl: './ajuda-mutua.component.html',
  styleUrls: ['./ajuda-mutua.component.css']
})
export class AjudaMutuaComponent implements OnInit {

  lista: any=[];
  topo: any;
  userData: any;

  dados: any;
  responseData: any = {};

  time: any;
  dadosSaldo:any;
  saldo: any = [];

  constructor(public service: PainelService) {
    this.getFila(1);
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.getTime();

   }

  ngOnInit() {
  }


  getSaldo() {

    this.dadosSaldo = {
      id_user: this.userData[0].id,
      cod_time: this.time[0].id
    }
    this.service.getSaldo(this.dadosSaldo).then((data)=>{
        this.saldo = data;
    },(err)=>{
  
    });
  
  
  }

  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;
        console.log(this.time);

    },(err)=>{

    });

  
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


doar(item, valor, fila){

this.getSaldo();
 
setTimeout(() => {

  this.dados = {
    id: this.userData[0].id,
    id_recebedor: item.cod_usuario,
    valor: valor,
    fila: fila
    }

    if(this.saldo.saldo >= valor) {
    this.service.PostDoacao(this.dados).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData[0].permissao==0){
        alert('Você ja está participando da fila');
      } 
      if(this.responseData[0].permissao==1){
       alert('Valor doado com sucesso. Agora você está participando destá fila');
      }
      if(this.responseData[0].permissao==2){
        alert('desculpe. ocorreu um erro. tente novamente mais tarde');
       }

    },(err)=>{

    });
  } else {
    alert('Você não tem saldo suficiente para participar do sistema');
  }
} , 1000);

}

}
