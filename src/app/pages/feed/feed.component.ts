import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa o Router
import { HeaderComponent } from '../../layout/header/header.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonAddComponent } from "./button-add/button-add.component";  
import { UploadModalComponent } from './upload-modal/upload-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from '../../../services/card.service';
import { CardModel } from '../../../models/card.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HeaderComponent, CardComponent, RouterModule, ButtonAddComponent, UploadModalComponent], // Importa o UploadModalComponent
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [CardService, AuthService]
})
export class FeedComponent {
  // Controla a exibição do modal
  isModalOpen: boolean = false;

  cards: CardModel[] = [];

  constructor(
    private router: Router, 
    private cardService: CardService,
    private authService: AuthService
  ) {
    this.setCards()
  } // Injeta o Router

  setCards(){
    this.cardService.getCards().then( obs => obs.subscribe(cards => {
      this.cards = cards.cards;
    }))
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.setCards();
    this.isModalOpen = false;
  }

  // Método para logout com animação slideRight
  logout() {
    this.authService.logoutUser().then(() =>{
      // console.log("Deslogando")
      this.router.navigate(['/login'], { state: { animate: 'slideRight' } })
    }
    )
  }
}
