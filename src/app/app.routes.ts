import { ElencoComponent } from './elenco/elenco.component';
import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';



export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'elenco', component: ElencoComponent }
   
]
