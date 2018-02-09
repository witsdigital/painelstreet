import { PainelService } from './../services/painel.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  cards: any = [];
  plantel: any = [];
  userData: any;
  time: any = [];
  
  responseData: any = [];
  mensagemError;

  informacoesTime: any = []

  venda: any;
  dados: any;


  constructor(public service: PainelService, private modal: NgbModal) {

    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.getTime();


    setInterval(() => { 
      this.getPlantel();
      this.getTimeAtributos();
     }, 1000);

    
    this.getCards();


   }

  ngOnInit() {
  }

  getCards(){
    this.service.getCards().subscribe((data)=>{
      this.cards = data;
      console.log(data);
    },(erro)=>{
      console.log(erro);
    });
  
  }

  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;

    },(err)=>{

    });

  
}

getPlantel(){
  this.service.getPlantel(this.time[0].id).then((data)=>{
      this.plantel = data;

  },(err)=>{

  });


}

escalar(card){

  this.dados = {
    cod_card: card.id,
    cod_time: this.time[0].id,
    id: card.id_plantel,
    posicao: card.posicao,
    estado: 1
  }
  console.log(card);

  this.service.PostEscalar(this.dados).then((data)=>{
      this.responseData = data;
  },(err)=>{

  });


}

removerEscalar(card){

  this.dados = {
    cod_card: card.id,
    cod_time: this.time[0].id,
    id: card.id_plantel,
    posicao: card.posicao,
    estado: 0
  }

  this.service.PostEscalar(this.dados).then((data)=>{
      this.responseData = data;
  },(err)=>{

  });


}



getTimeAtributos() {
  this.service.getTimeAtributos(this.time[0].id).then((data)=>{
      this.informacoesTime = data;

  },(err)=>{

  });


}



  comprar(item) {


if ( this.plantel.length < 22) {


  this.dados = {
    cod_card: item.id,
    cod_time: this.time[0].id,
    estado: 0,
    posicao: item.posicao
  }

            this.service.postPlantelCompra(this.dados).then((result) => {
             this.responseData = result;
             console.log(this.responseData);
             if(this.responseData.permissao==0){
              this.mensagemError = "Desculpe, ocorreu um erro";
             } 
             if(this.responseData.permissao==2){
              this.mensagemError = "Você ja comprou esse Jogador";
             }
             if(this.responseData.permissao==3){
              this.mensagemError = "Você ja atingiu o limite de Jogadores para a posição";
             }
             
              
           }, (err) => {
            console.log('erro')
           });
       
      this.mensagemError='';
    }

    } 


vender(item){
  this.service.PostVenda(item).then((result) => {
    this.responseData = result;
    console.log(this.responseData);
    if(this.responseData.permissao==0){
     this.mensagemError = "Desculpe, ocorreu um erro";
    } 
  }, (err) => {
   console.log('erro')
  });

}


  openModal(modal){
    this.modal.open(modal);
  }

  openModalVenda(modal, card){
    this.venda = card;
    this.modal.open(modal);
  }


}
