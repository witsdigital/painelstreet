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


  jogo: any;


  constructor(public service: PainelService, private modal: NgbModal) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    
    this.getTime();

    setTimeout(() => {     
      this.getTimes();
     }, 1000);

     setInterval(() => {     
      this.getTimes();
     }, 60000);

   }

  ngOnInit() {
  }

  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;
    },(err)=>{

    });

  
}

desafiar(item) {
  this.tempo = 0;
  this.jogo = {
    time: this.time[0].nome,
    adversario: item.nome,
    gols_1: 0,
    gols_2: 0,
    Equipe_v: ''
  };

  var tempo = setInterval(() => { 
    this.tempo++;
    if (this.tempo>=60){
      clearInterval(tempo);
     }
   }, 1000);

   var diferença1 = (this.time[0].atk_maximo + Math.floor((Math.random() * 1000) + 1)) - (item.defesa_maxima + Math.floor((Math.random() * 1000) + 1));
   var diferença2 = (item.atk_maximo + Math.floor((Math.random() * 1000) + 1)) - (this.time[0].defesa_maxima + Math.floor((Math.random() * 1000) + 1));
   var resistencia1 = this.time[0].resistencia_maxima + Math.floor((Math.random() * 1000) + 1);
   var resistencia2 = item.resistencia_maxima + Math.floor((Math.random() * 1000) + 1);
   var gol1 = 0;
   var gol2 = 0;

   if (diferença1 <= 0){
    var x = Math.floor((Math.random() * 200) + 1);
    diferença1 = diferença2 + x;
   }

   if (diferença2 <= 0){
    var x = Math.floor((Math.random() * 200) + 1);
    diferença2 = diferença2 + x;
   }

   if (diferença1 <= -300){
    var x = Math.floor((Math.random() * 500) + 1);
    diferença1 = diferença2 + x;
   }

   if (diferença2 <= -300){
    var x = Math.floor((Math.random() * 500) + 1);
    diferença2 = diferença2 + x;
   }

   if (diferença1 <= -500){
    var x = Math.floor((Math.random() * 1000) + 1);
    diferença1 = diferença2 + x;
   }

   if (diferença2 <= -500){
    var x = Math.floor((Math.random() * 1000) + 1);
    diferença2 = diferença2 + x;
   }

   if (diferença1 <= -1000){
    var x = Math.floor((Math.random() * 1500) + 1);
    diferença1 = diferença2 + x;
   }

   if (diferença2 <= -1000){
    var x = Math.floor((Math.random() * 1500) + 1);
    diferença2 = diferença2 + x;
   }


   var jogo = setInterval(() => {   
    resistencia1 =  resistencia1 - diferença2;
    resistencia2 =  resistencia2 - diferença1;
    if (resistencia1<=0){
      gol2++;
      this.jogo = {
        time: this.time[0].nome,
        adversario: item.nome,
        gols_1: gol1,
        gols_2: gol2,
        Equipe_v: ''
      };
    }

    if (resistencia2<=0){
      gol1++;
      this.jogo = {
        time: this.time[0].nome,
        adversario: item.nome,
        gols_1: gol1,
        gols_2: gol2,
        Equipe_v: ''
      };
    }

    if (this.tempo==60){
      clearInterval(jogo);
     }

     console.log('Time 1: ',this.jogo.gols_1);
     console.log('Time 2: ',this.jogo.gols_2);
   }, 6000);
  

}


getTimes(){
  this.service.getTimes(this.time[0].id).then((data)=>{
      this.times = data;
  },(err)=>{

  });

}

}