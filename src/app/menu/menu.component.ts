import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  userData: any = [];
  constructor(private router: Router) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
   }

  ngOnInit() {
  }

  sair(){
    localStorage.removeItem('userData');
    location.reload();
    this.router.navigate(['/']);
  }
  

}
