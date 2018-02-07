import { PainelService } from './../services/painel.service';
PainelService
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news:any;
  constructor(public service: PainelService) { 

this.service.getNoticias_base().subscribe((data)=>{
  this.news = data;
  console.log(data);
});

  }

  ngOnInit() {
  }

}
