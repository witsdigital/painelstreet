import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensagens: any = [];
  noticias: any = [];
  texto;
  responseData : any;
  mensagemError;

  userData: any ;
  dados: any;

  constructor(public service: PainelService) { 
       setInterval(() => { 
       this.mensagens_chat();
      }, 1000);
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnInit() {
  }


  mensagens_chat() {

    this.service.getChat().subscribe((data)=>{
      this.mensagens = data;
  
    },(erro)=>{
      console.log(erro);
    });
  
  }

  
  enviar() {
  
    this.dados = {
    cod_equipe: this.userData[0].id,
    mensagem: this.texto
  }
  
    if(!this.texto){
      this.mensagemError = "Digite uma mensagem valida";
      console.log('Digite dados validos');
    }else{
        this.service.postMensagens(this.dados).then((result) => {
         this.responseData = result;
         console.log(this.responseData[0].permissao);
         if(this.responseData[0].permissao==0){
          this.mensagemError = "Desculpe, ocorreu um erro";
         }
       }, (err) => {
         this.texto = '';
       });
   
  }
  
  }
  

}
