import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa o RouterModule para usar routerLink

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [RouterModule], // Adiciona o RouterModule
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css'] // Corrige para styleUrls
})
export class ButtonAddComponent {

}
