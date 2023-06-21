import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, heroesInterfaces } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  Heroes : heroesInterfaces[] = [];


  constructor( private _heroesServicios : HeroesService, private _rutas : Router ){

  }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.Heroes = this._heroesServicios.getHeroes();
    console.log(this.Heroes)
  }

}
