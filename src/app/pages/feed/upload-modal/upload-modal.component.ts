import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule
import { HttpClientModule } from '@angular/common/http';
import { CardService } from '../../../../services/card.service';
import { CardModel } from '../../../../models/card.model';

@Component({
  selector: 'app-upload-modal',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.css'],
  providers: [CardService]
})
export class UploadModalComponent {
  @Output() closeModal = new EventEmitter<void>();

  constructor(private cardService: CardService){}

  title: string = '';
  description: string = '';
  selectedImage: string | ArrayBuffer | null = null;
  fileImage?: File = undefined

  isClosing: boolean = false;

  // Método para fechar o modal
  close() {
    this.isClosing = true; // Ativa a animação de fechamento
    setTimeout(() => {
      this.closeModal.emit(); // Fecha o modal após a animação
      this.isClosing = false; // Reseta o estado para o próximo uso
    }, 500); // Define a duração da animação em milissegundos
  }

  // Método para processar o arquivo selecionado
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.fileImage = file;
      };
      reader.readAsDataURL(file);
    }
  }

  // Método para compartilhar a publicação
  share() {
    // Lógica para criar o documento no banco de dados
    // console.log('Compartilhando...', this.title, this.description);

    const card : CardModel = {
      description: this.description,
      title: this.title,
      imageUrl: ''
    }

    this.cardService.createCard(this.fileImage as File,card).then(obs => obs.subscribe(card => {
      // console.log(`Publicação criada com sucesso! [${card.cardId}]`);
      this.close();
    }))
  }
}

