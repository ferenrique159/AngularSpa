import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private _routes:Router ){

  }

  buscarHeroes = ( buscarHeroe : any ) => {
    this._routes.navigate( [ '/buscar', buscarHeroe ] )
  }

}
