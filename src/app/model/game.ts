export interface Game {
    name: String,
    rating: number,
    status: GameStatus,
    image: String,
    price: number, 
    sale: number,
}

export enum GameStatus {
    Owned = 'Owned',
    Free = 'Free',
    Downloading = 'Downloading',
    Offloaded = 'Offloaded',
    Available = 'Available',
    Discounted = 'Discounted',
    Reservable = 'Reservable'
}
