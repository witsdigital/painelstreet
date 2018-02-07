import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dadoslogin: any = {};
  cadastro: any = {};
  login: any;

  constructor(private router: Router) {
    if (localStorage.getItem('userData')) {
      this.router.navigate(['home']);

    } else {
      this.router.navigate(['/']);
    }


  }

  ngOnInit() {
  }
  logar(cadastro) {
    console.log(cadastro);

    localStorage.setItem('userData', JSON.stringify(cadastro));
    location.reload();
    this.router.navigate(['home']);

  }

}
