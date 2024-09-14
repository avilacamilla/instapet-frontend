import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adiciona FormsModule aqui
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css']
})
export class UploadModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  // Propriedades para título, descrição e imagem selecionada
  title: string = '';
  description: string = '';
  selectedImage: string | ArrayBuffer | null = null;

  // Método para fechar o modal
  close() {
    this.closeModal.emit();
  }

  // Método para processar o arquivo selecionado
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Método para compartilhar a publicação
  share() {
    // Lógica para criar o documento no banco de dados
    console.log('Compartilhando...', this.title, this.description);

    // Simulando sucesso da operação
    setTimeout(() => {
      console.log('Publicação criada com sucesso!');
      this.close(); // Fecha o modal
    }, 2000);
  }
}
