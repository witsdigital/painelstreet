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

  constructor(public service: PainelService, private modal: NgbModal) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.getTime();

    setInterval(() => { 
      this.getTimes();
     }, 1000);

   }

  ngOnInit() {
  }

  getTime(){
    this.service.getTime(this.userData[0].id).then((data)=>{
        this.time = data;
        console.log(this.time);

    },(err)=>{

    });

  
}


getTimes(){
  this.service.getTimes(this.time[0].id).then((data)=>{
      this.times = data;
      console.log(this.time);

  },(err)=>{

  });

}
