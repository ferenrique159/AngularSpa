import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';


//Services
import { HeroesService } from './services/heroes.service';
import { HeroesIndvComponent } from './components/heroes-indv/heroes-indv.component';
import { HeroesTarjetaComponent } from './components/heroes-tarjeta/heroes-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    AboutComponent,
    HeroesComponent,
    HeroesIndvComponent,
    HeroesTarjetaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ HeroesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
