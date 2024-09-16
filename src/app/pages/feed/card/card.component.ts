import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Para usar ngModel
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from '../../../../services/card.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCardModule, MatMenuModule, MatButtonModule, FormsModule],
  providers: [CardService],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private cardService: CardService){}

  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() cardId?: string;
  @Output() onDeleteCard = new EventEmitter<void>(); 

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

  deleteCard(){
    this.cardService.deleteCard(this.cardId ?? '').then(obs => obs.subscribe( () => this.onDeleteCard.emit()))
  }

  // Salva as alterações e desabilita os modos de edição
  saveEdit() {
    this.title = this.editedTitle;
    this.description = this.editedDescription;
    this.isEditMode = false;
    this.isEditing = false;

    this.cardService.updateCard(this.cardId ?? '',{
      description: this.description,
      title: this.title
    }).then(obs => obs.subscribe())
    // console.log('Alterações salvas!');
  }
}