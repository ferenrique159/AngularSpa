import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent {

  // Recibiendo informacion desde el padre
  @Input() superH : any;
  @Input() i : number = 0;

  // Mandando Informacion desde el hijo
  // @Output() buscarHeroe : EventEmitter<number>;

  constructor( private _rutas : Router ){ }

  irRuta = () => {
    this._rutas.navigate( [ '/heroes', this.i ] )
  }


}
