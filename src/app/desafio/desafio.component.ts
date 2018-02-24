import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  time: any =[];

  times:any = [];
  userData: any = {};
  tempo = 0;
  partidas: any = [];

  responseData: any;

  estado = 0;

  jogo: any;


  constructor(public service: PainelService, private modal: NgbModal) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    
    this.getTime();

    setTimeout(() => {     
      this.getTimes();
     }, 1000);

     setInterval(() => {     
      this.getPartidas();
     }, 3000);

     setInterval(() => {     
      this.getTimes();
     }, 30000);

   }

  ngOnInit() {
  }

  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;
    },(err)=>{

    });

  
}


getPartidas(){
  this.service.getPartidas().subscribe((data)=>{
      this.partidas = data;
  },(err)=>{

  });


}

desafiar(item) {
  this.getTime();
  this.estado = 1;
  this.tempo = 0;
  this.jogo = {
    time: this.time[0].nome,
    cod_time_a: this.time[0].id,
    cod_time_b: item.id,
    adversario: item.nome,
    gol_time_a: 0,
    gol_time_b: 0,
  };



  var tempo = setInterval(() => { 
    this.tempo++;
    if (this.tempo>=60){
      clearInterval(tempo);
      this.estado = 0;
     }
   }, 1000);

   var diferença1 = (this.time[0].atk_maximo + Math.floor((Math.random() * 1500) + 1)) - (item.defesa_maxima + Math.floor((Math.random() * 1500) + 1));
   var diferença2 = (item.atk_maximo + Math.floor((Math.random() * 1500) + 1)) - (this.time[0].defesa_maxima + Math.floor((Math.random() * 1500) + 1));
   var resistencia1 = this.time[0].resistencia_maxima;
   var resistencia2 = item.resistencia_maxima;
   var gol1 = 0;
   var gol2 = 0;

   if (diferença1 <= 0){
    var x = Math.floor((Math.random() * 1000) + 1);
    diferença1 =  x;
   }

   if (diferença2 <= 0){
    var x = Math.floor((Math.random() * 1000) + 1);
    diferença2 =  x;
   }

   


   var jogo = setInterval(() => {   
    resistencia1 =  resistencia1 - diferença2;
    resistencia2 =  resistencia2 - diferença1;
    if (resistencia1<=0){
      gol2++;
      this.jogo = {
        time: this.time[0].nome,
        cod_time_a: this.time[0].id,
        cod_time_b: item.id,
        adversario: item.nome,
        gol_time_a: gol1,
        gol_time_b: gol2,
        Equipe_v: '',
        Equipe_d: ''
      };
    }

    if (resistencia2<=0){
      gol1++;
      this.jogo = {
        time: this.time[0].nome,
        cod_time_a: this.time[0].id,
        cod_time_b: item.id,
        adversario: item.nome,
        gol_time_a: gol1,
        gol_time_b: gol2,
        Equipe_v: '',
        Equipe_d: ''
      };
    }

    

    if(gol1>gol2){
      this.jogo = {
        time: this.time[0].nome,
        cod_time_a: this.time[0].id,
        cod_time_b: item.id,
        adversario: item.nome,
        gol_time_a: gol1,
        gol_time_b: gol2,
        Equipe_v: this.time[0].id_usuario,
        Equipe_d: item.id_usuario,
        empate: 0
      };
    }

    if(gol1<gol2){
      this.jogo = {
        time: this.time[0].nome,
        cod_time_a: this.time[0].id,
        cod_time_b: item.id,
        adversario: item.nome,
        gol_time_a: gol1,
        gol_time_b: gol2,
        Equipe_v: item.id_usuario,
        Equipe_d: this.time[0].id_usuario,
        empate: 0
      };
    }

    if(gol1<gol2){
      this.jogo = {
        time: this.time[0].nome,
        cod_time_a: this.time[0].id,
        cod_time_b: item.id,
        adversario: item.nome,
        gol_time_a: gol1,
        gol_time_b: gol2,
        Equipe_v: '',
        Equipe_d: '',
        empate: 1
      };
    }

    
    if (this.tempo==60){
      this.service.PostPartida(this.jogo).then((result) => {
        this.responseData = result;
        console.log(this.responseData.permissao);
        if(this.responseData.permissao==0){
            
        }else{
        alert('Erro ao salvar dados da partida')
        }
      }, (err) => {
        // Error log
      });
      clearInterval(jogo);
     }

     console.log('Time 1: ', diferença1);
     console.log('Time 2: ',diferença2);
   }, 6000);
  

}


getTimes(){
  this.service.getTimes(this.time[0].id).then((data)=>{
      this.times = data;
  },(err)=>{

  });

}

}