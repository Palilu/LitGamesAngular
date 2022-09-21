import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { GamesService } from '../games.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-lit-cart',
  templateUrl: './lit-cart.component.html',
  styleUrls: ['./lit-cart.component.scss']
})
export class LitCartComponent implements OnInit {

  public cart: Set<Game> = new Set<Game>;
  
  constructor(private cartService: CartService, private gameService: GamesService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(updatedCart => {
      this.cart = updatedCart;
    });
  }

}
