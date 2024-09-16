import {Timestamp} from '@angular/fire/firestore'

export interface CardModel {
    cardId?: string;
    userId?: string;
    createdAt?: Timestamp;
    imageUrl: string;
    title: string;
    description: string;
}