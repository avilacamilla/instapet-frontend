import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-add',
  standalone: true,
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent {
  @Output() openModal = new EventEmitter<void>();

  // Método para emitir o evento de abrir o modal
  onOpenModal() {
    this.openModal.emit();
  }
}
