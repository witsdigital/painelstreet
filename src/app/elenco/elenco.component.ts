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
  escalacao: any = [];
  
  responseData: any = [];
  mensagemError;

  informacoesTime: any = []

  venda: any;
  dados: any;

  saldo: any = [];
  dadosSaldo: any;


  dadosTreinamento: any;
  treinamento: any = {
    resistencia: 0,
		ataque: 0,
		defesa: 0,
		proximo_resistencia: 0,
		proximo_ataque: 0,
		proximo_defesa: 0,
		defesa_valor: 0,
		ataque_valor: 0,
		resistencia_valor: 0
  };

 

  constructor(public service: PainelService, private modal: NgbModal) {

    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.getTime();
  

    setInterval(() => { 
      this.getPlantel();
      this.getTimeAtributos();
      this.calcTitular();
      this.getTreinamento();
 
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
        console.log(this.time);

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

  this.service.PostEscalar(this.dados).then((data)=>{
      this.responseData = data;
      if(this.responseData.mensage==1){
        this.mensagemError = "Desculpe, ocorreu um erro";
        alert(this.mensagemError);
       } 
       if(this.responseData.mensage==2){
        this.mensagemError = "Você ja escalou o numero maximo de jogadores dessa posição";
        alert(this.mensagemError);
       }
       if(this.responseData.mensage==3){
        this.mensagemError = "Você ja atingiu o limite de Jogadores";
        alert(this.mensagemError);
       }
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

  this.service.removerEscalar(this.dados).then((data)=>{
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





  comprar(item) {

    this.getSaldo();

  if(this.saldo.saldo >= item.valor) {

if ( this.plantel.length < 23) {


  this.dados = {
    cod_card: item.id,
    cod_time: this.time[0].id,
    estado: 0,
    posicao: item.posicao,
    cod_usuario: this.userData[0].id,
    valor: item.valor
  }

            this.service.postPlantelCompra(this.dados).then((result) => {
             this.responseData = result;
             console.log(this.responseData);
             if(this.responseData.permissao==1){
              this.mensagemError = "Desculpe, ocorreu um erro";
              alert(this.mensagemError);
             } 
             if(this.responseData.permissao==2){
              this.mensagemError = "Você ja comprou esse Jogador";
              alert(this.mensagemError);
             }
             if(this.responseData.permissao==3){
              this.mensagemError = "Você ja atingiu o limite de Jogadores para a posição";
              alert(this.mensagemError);
             }
             
              
           }, (err) => {
            console.log('erro')
           });
       
      this.mensagemError='';
    }

  } else {
    
    this.mensagemError = "Você não tem saldo suficiente para comprar esse jogador";
    alert(this.mensagemError);
  }

    } 


vender(item){

  this.dados = {
    cod_card: item.id,
    cod_time: this.time[0].id,
    posicao: item.posicao,
    cod_usuario: this.userData[0].id,
    valor: item.valor,
    id_plantel: item.id_plantel
  }

  this.service.PostVenda(this.dados).then((result) => {
    this.responseData = result;
    console.log(this.responseData);
    if(this.responseData.permissao==0){
     this.mensagemError = "Desculpe, ocorreu um erro";
     alert(this.mensagemError);
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

  calcTitular(){
    this.escalacao = [];
    for (var i = 0; i < this.plantel.length; i++){
      if(this.plantel[i].estado == 1){
        this.escalacao.push(this.plantel[i]);
      }
    }
  }


  treinar(item, tipo){

  this.getSaldo();

  if(this.saldo.saldo >= item) {

    this.dadosTreinamento = {
      tipo: tipo,
      cod_time: this.time[0].id,
      valor: item
    }

    this.service.postTreinamento(this.dadosTreinamento).then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData.permissao==1){
       console.log('foi');
      } 
      if(this.responseData.permissao==2){
       alert('desculpe. ocorreu um erro. tente novamente mais tarde');
      }

    },(err)=>{

    });
  } else {
    alert("Saldo insuficiente");
  }

  }


  getTreinamento(){
    this.service.getTreinamento(this.time[0].id).then((data)=>{
      this.treinamento = data;
    },(err)=>{

    });

  }


}
