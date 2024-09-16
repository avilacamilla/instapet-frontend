import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { getDownloadURL, getStorage, ref, Storage, uploadBytes } from "@angular/fire/storage";
import { Auth } from "@angular/fire/auth";
import { CardModel } from "../models/card.model";
import { environment } from "../environments/environment";
import { map, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private readonly storage  = inject(Storage);
    private readonly auth = inject(Auth);

    constructor(private http : HttpClient){}

    public async deleteCard(cardId: string){
        const url = environment.deleteCardUrl(cardId);

        const {token} = await this.getToken();
        return this.http.delete(url,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

    }

    public async updateCard(cardId: string, card: Partial<CardModel>){
        const url = environment.patchCardUrl(cardId);

        const {token} = await this.getToken();
        return this.http.patch(url,card,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
    }

    public async createCard(image: File, card: CardModel){
        const now = Date.now();

        const imageRefPath = `cards/${now}.jpg`; //cria o caminho no storage
        const imageRef = ref(this.storage,imageRefPath); //cria uma referência para imagem no storage
        await uploadBytes(imageRef,image); //upload
        
        card.imageUrl = imageRefPath;
        const url = environment.postCardsUrl;
        const {token} = await this.getToken();
        // console.log(token)
        return this.http.post<CardModel>(url,card,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
    }

    public async getCards(){
        // console.log("Buscando cards")

        const url = environment.getCardsUrl;

        const {token} = await this.getToken();
        const cardRequest = this.http.get<{cards: CardModel[]}>(url,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).pipe(
            switchMap(async(cards) => {
                for(const card of cards.cards){
                    card.imageUrl = await this.getImageFromRef(card.imageUrl);
                }
                return cards;
            })
        );
        
        return cardRequest;
    }

    public async getImageFromRef(imagePath: string){
        const imageRef = ref(this.storage,imagePath);
        return getDownloadURL(imageRef);
    }

    private async getToken(){
        const token = await this.auth.currentUser?.getIdToken();
        const email = this.auth.currentUser?.email;

        return {token,email}
    }

}