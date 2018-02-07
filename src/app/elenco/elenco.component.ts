import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  cards:any = [];
  constructor() {

    for(let i = 0; i<10; i++){
      this.cards[i] = i;

    }

   }

  ngOnInit() {
  }

}
