import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-lit-lil-cart',
  templateUrl: './lit-lil-cart.component.html',
  styleUrls: ['./lit-lil-cart.component.scss']
})
export class LitLilCartComponent implements OnInit {

  public cart: Set<Game> = new Set<Game>;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe(update => {
      this.cart = update;
    });
  }
}
