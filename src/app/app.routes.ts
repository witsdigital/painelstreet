import { SaqueComponent } from './saque/saque.component';
import { ElencoComponent } from './elenco/elenco.component';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DepositoComponent } from './deposito/deposito.component';
import { DesafioComponent } from './desafio/desafio.component';
import { DetalheNoticiaComponent } from './detalhe-noticia/detalhe-noticia.component';
import { AjudaMutuaComponent } from './ajuda-mutua/ajuda-mutua.component';




export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login/:id', component: LoginComponent},
    { path: 'elenco', component: ElencoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'deposito', component: DepositoComponent },
    { path: 'saque', component: SaqueComponent },
    { path: 'ajuda', component: AjudaMutuaComponent },
    { path: 'desafios', component: DesafioComponent },
    {path: 'news/:id', component: DetalheNoticiaComponent},
   
]
