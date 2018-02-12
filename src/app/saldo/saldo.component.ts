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

  constructor(public service: PainelService) {

    

    this.userData = JSON.parse(localStorage.getItem('userData'));

    

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

  
getSaldo() {
  this.service.getSaldo(this.userData[0].id).then((data)=>{
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
