
export const environment = {
    getCardsUrl: 'http://localhost:8080/cards',
    postCardsUrl: 'http://localhost:8080/cards',
    patchCardUrl: (cardId: string) => `http://localhost:8080/cards/${cardId}`,
    deleteCardUrl: (cardId: string) => `http://localhost:8080/cards/${cardId}`
}