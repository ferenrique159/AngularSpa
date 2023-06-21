import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-indv',
  templateUrl: './heroes-indv.component.html'
})
export class HeroesIndvComponent {

  HeroeIndv : any = {};

  constructor( private _activatedRoute: ActivatedRoute, private _heroeServices : HeroesService ){

    this._activatedRoute.params.subscribe( params => {
      // Se coloca "ID" ya que, es la que fue lo que se utilizo al realizar la ruta, el parametro que se coloco fue /heroes/:id... SI hubiera sido otra palabra es la que se escogeria para poder tomar la ruta

      this.HeroeIndv = this._heroeServices.getHeroeInd( params['id'] );
      console.log(  this.HeroeIndv );
    });


  }

}
