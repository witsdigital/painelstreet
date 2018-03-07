import { PainelService } from './../services/painel.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  dadossaque: any = {};

  dadosDeposito: any;
  dadosSaldo: any;
  limite: any = [];
  itemdelete: any;
  userData: any = [];
  time: any = [];
  saldo: any = [];
  mensagem;
  dados: any;


  saquesabertos: any = [];


  count: any = [];

  responseData: any;

  constructor(private modal: NgbModal, public service: PainelService) {

    this.userData = JSON.parse(localStorage.getItem('userData'));

    this.getTime();

    setInterval(() => { 

      this.getLimiteSaque();
      this.getCountSaques();
      this.getSaqueID();
 
     }, 1000);

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



  getLimiteSaque() {

    this.dadosDeposito = {
      id_user: this.userData[0].id,
      cod_time: this.time[0].id
    }
    this.service.getLimiteSaque(this.dadosDeposito).then((data)=>{
        this.limite = data;
    },(err)=>{
  
    });
  }


  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;

    },(err)=>{

    });

  
}


enviar(){
  this.getSaldo();
  setTimeout(() => { 
  console.log(this.limite.limite,  this.dadossaque.valor);
  if (this.limite.limite >= this.dadossaque.valor) {
    if(this.saldo.saldo >= this.dadossaque.valor) {
      this.dados = {
        valor: this.dadossaque.valor,
        cod_usuario: this.userData[0].id,
        status: 0
      }
      this.service.postSaque(this.dados).then((result) => {
        this.responseData = result;
        console.log(this.responseData);
        if(this.responseData.permissao==1){
          alert('Saque solicitado com sucesso, aguardando aprovação');
        } 
        if(this.responseData.permissao==2){
         alert('desculpe. ocorreu um erro. tente novamente mais tarde');
        }
  
      },(err)=>{
  
      });

    } else {
      alert("Saldo insuficiente");
    }
  } else {
    alert("O valor ultrapassa o seu limite de saque");
  }
}, 1000);
}


getCountSaques() {
  this.service.getCountSaques(this.userData[0].id).then((result) => {
    this.count = result;
    console.log(this.responseData);
},(err)=>{
  
});

}


getSaqueID(){

  this.service.getSaqueID(this.userData[0].id).then((result) => {
    this.saquesabertos = result;

  }, (err) => {
    // Error log
  });

}


deleteSaqueID(item){

  this.service.deleteSaqueID(this.itemdelete.id).then((result) => {
    this.saquesabertos = result;
  }, (err) => {
    // Error log
  });

}


  openModal(modal){
    this.modal.open(modal);
  }

  OpenModalDel(modal, item){
    this.itemdelete = item;
    this.modal.open(modal);
  }


}