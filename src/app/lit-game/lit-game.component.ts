import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Game, GameStatus } from '../model/game';

@Component({
  selector: 'app-lit-game',
  templateUrl: './lit-game.component.html',
  styleUrls: ['./lit-game.component.scss']
})
export class LitGameComponent implements OnInit {

  public gameStatus = GameStatus;

  constructor(private cartService: CartService) { }

  @Input()
  public game: Game = {
    name: 'Legend of Zelda: Tiers of the Kingdom',
    rating: 5,
    status: GameStatus.Reservable,
    image: 'totk.png',
    price: 59.99,
    sale: 59.99,
  }

  ngOnInit(): void {
    console.log(this.game);
  }

  public addToCart(game: Game) {
    this.cartService.addGame(game);
  }

}
