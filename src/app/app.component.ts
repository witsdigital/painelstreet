import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logado: any = true;
  title = 'app';
  constructor(private router: Router) { }

  ngOnInit() {

    if (localStorage.getItem('userData')) {
      this.logado = true;
     
    } else {
      this.logado = false;
    }

  }

}
