import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  recuperar: any = {};;
  login: any;
  

  responseData : any = [];

  mensagemError;
  mensagemErrorCadastro;
  mensagemSucessCadastro;

  constructor(private router: Router, public service: PainelService, private modal: NgbModal) {
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


cadastrar() {


  if(!this.cadastro.login || !this.cadastro.senha || !this.cadastro.senha || !this.cadastro.senha2){
    this.mensagemErrorCadastro = '';
    this.mensagemErrorCadastro = "Preencha todos os campos"
  }
  
  else if(this.cadastro.senha != this.cadastro.senha2){
    this.mensagemErrorCadastro = '';
    this.mensagemErrorCadastro = "As senhas não correspondem";
  }
  else{
    this.service.postCadastro(this.cadastro).then((result) => {
      this.responseData = result;
      if(this.responseData.mensage==1){

        this.mensagemErrorCadastro = '';
       this.mensagemErrorCadastro = "Nome de usuario já cadastrado";
  
      }
      if(this.responseData.mensage==2){
        this.mensagemSucessCadastro = '';
        this.mensagemErrorCadastro = "Email já cadastrado";
       }
       
       else {
        this.mensagemErrorCadastro = "";
        this.mensagemSucessCadastro = "Cadastro realizado com sucesso, divirta-se.";
      }


    }, (err) => {
      // Error log
    });
    
}

}

recuperarSenha() {

  this.service.postRecsenha(this.recuperar.email).then((result) => {
    this.responseData = result;
    console.log(this.responseData.permissao);
    if(this.responseData.mensage==0){
      this.mensagemSucessCadastro = '';
     this.mensagemErrorCadastro = "Email não cadastrado"
        
    }else{
    this.mensagemErrorCadastro = ''; 
    this.mensagemSucessCadastro = "Nova senha enviada para seu email"

    }


  }, (err) => {
    // Error log
  });
}


openModal(modal){
  this.mensagemSucessCadastro = '';
  this.mensagemErrorCadastro = '';
  this.modal.open(modal);
  
}

}
