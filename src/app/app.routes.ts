import { SaqueComponent } from './saque/saque.component';
import { ElencoComponent } from './elenco/elenco.component';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { TicketsComponent } from './tickets/tickets.component';
import { DepositoComponent } from './deposito/deposito.component';
import { DesafioComponent } from './desafio/desafio.component';




export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'elenco', component: ElencoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'deposito', component: DepositoComponent },
    { path: 'saque', component: SaqueComponent },
    { path: 'desafios', component: DesafioComponent }
   
]
