import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PainelService } from '../services/painel.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dadoslogin: any = {};
  cadastro: any = {};
  login: any;
  responseData : any = [];

  mensagemError;

  constructor(private router: Router, public service: PainelService) {
    if (localStorage.getItem('userData')) {
      this.router.navigate(['home']);

    } else {
      this.router.navigate(['/']);
    }


  }

  ngOnInit() {
  }


  logar() {


    if(!this.dadoslogin.login || !this.dadoslogin.senha){
      this.mensagemError = "Preencha os campos"
      console.log('Digite dados validos');
    }else{
        this.service.postDatas(this.dadoslogin,'signup').then((result) => {
         this.responseData = result;
         console.log(this.responseData[0].permissao);
         if(this.responseData[0].permissao==0){
          this.mensagemError = "Login ou senha inválido"
             console.log('Login/Senha inválido')
         }else{
           localStorage.setItem('userData', JSON.stringify(this.responseData));
           location.reload();
           this.router.navigate(['home']);

         }


       }, (err) => {
         // Error log
       });
   
  }

}

}
