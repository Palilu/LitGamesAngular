import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../model/game';

@Component({
  selector: 'app-lit-carrousel',
  templateUrl: './lit-carrousel.component.html',
  styleUrls: ['./lit-carrousel.component.scss']
})
export class LitCarrouselComponent implements OnInit {

  @Input()
  public tittle: String = "Recomendados para vos";
  
  public games: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(g => {
      this.games = g;
    });
  }
}
