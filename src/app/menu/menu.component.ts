import { Component, Output, EventEmitter } from '@angular/core';
import { ZAPATOS } from '../lista zapatos';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  onHombresClick(): void {
    // Aquí puedes agregar la lógica que deseas que ocurra cuando se hace clic en "Hombres"
    console.log('Haz clic en "Hombres"');
  }

  onMujeresClick(): void {
    // Aquí puedes agregar la lógica que deseas que ocurra cuando se hace clic en "Mujeres"
    console.log('Haz clic en "Mujeres"');
  }
}