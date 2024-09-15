export interface CreateCardDto {
    userId?: string; //aguardando auth
    imageUrl: string;
    title: string;
    description: string;
}