import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game } from './model/game';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Set<Game> = new Set<Game>;
  private _cartSubject: BehaviorSubject<Set<Game>> = new BehaviorSubject(this._cart);
  public cart :Observable<Set<Game>> = this._cartSubject.asObservable();

  constructor() {
    this._cartSubject.next(this._cart);
  }

  public getGames(): Set<Game> {
    return this._cart;
  }

  public addGame(game : Game): void {
    this._cart.add(game);
    this._cartSubject.next(this._cart);
  }
}
