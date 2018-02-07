import { ElencoComponent } from './elenco/elenco.component';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';




export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'elenco', component: ElencoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'news', component: NewsComponent }
   
]
