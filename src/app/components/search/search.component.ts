import { Component, OnInit } from '@angular/core';
import { HeroesService, heroesInterfaces } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  HeroeBuscar : any = [];
  buscando : any;


  constructor( private _heroeServices:HeroesService, private _activatedRoute: ActivatedRoute ){

  }

  ngOnInit(): void {
      this._activatedRoute.params.subscribe( params => {
      // Se coloca "ID" ya que, es la que fue lo que se utilizo al realizar la ruta, el parametro que se coloco fue /heroes/:id... SI hubiera sido otra palabra es la que se escogeria para poder tomar la ruta

      this.HeroeBuscar = this._heroeServices.buscarHeroes( params['buscarHeroe'] );
      console.log(this.HeroeBuscar);
      this.buscando = params['buscarHeroe'];
    });
  }


}
