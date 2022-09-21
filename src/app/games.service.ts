import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game, GameStatus } from './model/game';

const URL = 'https://632b86681aabd8373987def8.mockapi.io/ap1/v1/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  public getGames() :  Observable<Game[]> {
    return this.http.get<Game[]>(URL);
  }

  public getMockedGames() : Game[] {
    let games: Game[] = [
      {
        name: 'Tiers of the Kingdom',
        rating: 5,
        status: GameStatus.Reservable,
        image: 'totk.png',
        price: 59.99,
        sale: 59.99,
      },
      {
        name: 'Breath of the Wild',
        rating: 5,
        status: GameStatus.Owned,
        image: 'botw.png',
        price: 29.99,
        sale: 59.99,
      },
      {
        name: "Link's Awakening",
        rating: 4,
        status: GameStatus.Discounted,
        image: 'la.png',
        price: 29.99,
        sale: 59.99,
      },
      {
        name: 'Hollow Knight',
        rating: 5,
        status: GameStatus.Owned,
        image: 'hk.png',
        price: 9.99,
        sale: 14.99,
      },
      {
        name: 'Hades',
        rating: 5,
        status: GameStatus.Discounted,
        image: 'h.png',
        price: 9.99,
        sale: 14.99,
      },
      {
        name: 'Sonic Legends',
        rating: 3,
        status: GameStatus.Available,
        image: 'sl.png',
        price: 14.99,
        sale: 14.99,
      },
      {
        name: 'Lineage II',
        rating: 4,
        status: GameStatus.Free,
        image: 'l2.png',
        price: 0,
        sale: 0,
      },
      {
        name: 'League of Legends',
        rating: 3,
        status: GameStatus.Free,
        image: 'lol.png',
        price: 0,
        sale: 0,
      },
      {
        name: 'Super Mario Odyssey',
        rating: 5,
        status: GameStatus.Offloaded,
        image: 'smo.png',
        price: 29.99,
        sale: 59.99,
      },
      {
        name: 'Legends of Runaterra',
        rating: 3,
        status: GameStatus.Free,
        image: 'lor.png',
        price: 0,
        sale: 0,
      },
      {
        name: 'HearthStone',
        rating: 4,
        status: GameStatus.Free,
        image: 'hs.png',
        price: 0,
        sale: 0,
      }
    ];
    
    games.sort(function () {
      return Math.random() - 0.5;
    });

    return games;
  }
}
