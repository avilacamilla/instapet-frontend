import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonAddComponent } from "./button-add/button-add.component";  
import { UploadModalComponent } from './upload-modal/upload-modal.component';


@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, RouterModule, ButtonAddComponent, UploadModalComponent], // Importa o UploadModalComponent
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  // Controla a exibição do modal
  isModalOpen: boolean = false;

  // Método para abrir o modal
  openModal() {
    this.isModalOpen = true;
  }

  // Método para fechar o modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Simulação de dados dos cards
  cards = [
    {
      imageSrc: '../../../assets/images/gatinho4.jpg',
      title: '#tbt',
      description: 'Minha primeira praia'
    },
    {
      imageSrc: '../../../assets/images/gatinho5.jpg',
      title: 'Se isso é estar na pior...',
      description: 'Na praia com as amigas!'
    },
    {
      imageSrc: '../../../assets/images/gatinho3.jpeg',
      title: '#férias',
      description: 'Play nas férias!!!'
    },
    {
      imageSrc: '../../../assets/images/gatinho4.jpg',
      title: '#tbt',
      description: 'Minha primeira praia'
    },
    {
      imageSrc: '../../../assets/images/gatinho5.jpg',
      title: 'O dia que virei um wrap!',
      description: 'A Márcia me ama!'
    },
    {
      imageSrc: '../../../assets/images/gatinho3.jpeg',
      title: 'O dia que virei um wrap!',
      description: 'A Márcia me ama!'
    },
    {
      imageSrc: '../../../assets/images/gatinho5.jpg',
      title: 'O dia que virei um wrap!',
      description: 'A Márcia me ama!'
    },
    {
      imageSrc: '../../../assets/images/gatinho3.jpeg',
      title: 'O dia que virei um wrap!',
      description: 'A Márcia me ama!'
    },
  ];
}
