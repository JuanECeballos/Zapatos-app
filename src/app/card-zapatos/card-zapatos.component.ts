import { Component } from '@angular/core';
import { ZAPATOS } from '../lista zapatos';

@Component({
  selector: 'app-card-zapatos',
  templateUrl: './card-zapatos.component.html',
  styleUrls: ['./card-zapatos.component.css']
})
export class CardZapatosComponent {
  zapatos=ZAPATOS;
  atributo="Hola"
  constructor (){
}
}