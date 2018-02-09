import { PainelService } from './services/painel.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ElencoComponent } from './elenco/elenco.component';
import { LoginComponent } from './login/login.component';
import { BasehomeComponent } from './basehome/basehome.component';
import { NewsComponent } from './news/news.component';
import { TicketsComponent } from './tickets/tickets.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ElencoComponent,
    LoginComponent,
    BasehomeComponent,
    NewsComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [PainelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
