import { Component, OnInit } from '@angular/core';
import { PainelService } from '../services/painel.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  userData: any = [];
  saldo: any = [];

  dadosSaldo: any;

  valorLTC: any = {
    ticker: { buy: "",
     date: '',
     high: "",
     last: "",
     low: "",
     sell: "",
     vol: ""
    }
  };

  time: any =[];

  constructor(public service: PainelService) {

    

    this.userData = JSON.parse(localStorage.getItem('userData'));

    this.getTime();

    setInterval(() => { 

      this.getSaldo();
 
     }, 1000);

     

   }

   

  ngOnInit() {

    this.getLTC();

    setInterval(() => { 

      this.getLTC();
 
     }, 60000);
  }

  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;

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

getLTC() {
  this.service.apiLTC().subscribe((data)=>{
      this.valorLTC = data;
      console.log(this.valorLTC);
  },(err)=>{

  });
}

}
