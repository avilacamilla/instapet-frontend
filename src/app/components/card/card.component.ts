import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatMenuModule, MatButtonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  isEditMode = false; // Modo de exibição dos ícones de edição
  isEditing = false; // Modo de edição dos textos
  editedTitle = '';
  editedDescription = '';

  // Alterna o modo de edição
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (!this.isEditMode) {
      this.isEditing = false;
    }
  }

  // Habilita a edição dos textos
  enableEdit() {
    this.isEditing = true;
    this.editedTitle = this.title;
    this.editedDescription = this.description;
  }

  // Salva as alterações e desabilita os modos de edição
  saveEdit() {
    this.title = this.editedTitle;
    this.description = this.editedDescription;
    this.isEditMode = false;
    this.isEditing = false;
    console.log('Alterações salvas!');
    // Aqui você pode futuramente fazer o update no banco de dados
  }
}