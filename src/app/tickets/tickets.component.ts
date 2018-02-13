import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: any = {};
  responseData: any = [];
  dados: any;
  userData: any;

  mensagem;
  itemdelete: any;

  ticketAbertos: any = [];

  constructor(private modal: NgbModal, public service: PainelService) {
    this.userData = JSON.parse(localStorage.getItem('userData'));

    setInterval(() => { 

      this.getTicketID();
 
     }, 2000);

    
  }


  
  ngOnInit() {
   
  }

  enviar(tickets){

      this.dados = {
        cod_usuario: this.userData[0].id,
        assunto: tickets.assunto,
        texto: tickets.mensagem,
        prioridade: tickets.prioridade,
        departamento: tickets.departamento,
        status: 0
      }

      if(!tickets.assunto || !tickets.mensagem || !tickets.assunto || !tickets.prioridade || !tickets.departamento){
        this.mensagem = "Preencha os campos"
        console.log('Digite dados validos');
      }else{

    this.service.postTicket(this.dados).then((result) => {
      this.responseData = result;
      if(this.responseData.mensage==0){
        this.mensagem = 'Ticket enviado com sucesso';
        this.tickets = '';
      }else{
        this.mensagem = 'Desculpe, occorreu um erro';
      }


    }, (err) => {
      // Error log
    });
  }

  }


  getTicketID(){

  this.service.getTicketID(this.userData[0].id).then((result) => {
    this.ticketAbertos = result;

  }, (err) => {
    // Error log
  });

}


deleteTicketID(item){

  this.service.deleteTicketID(this.itemdelete.id).then((result) => {
    this.ticketAbertos = result;
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
