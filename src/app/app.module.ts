import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LitFooterComponent } from './lit-footer/lit-footer.component';
import { LitHeaderComponent } from './lit-header/lit-header.component';
import { LitCartComponent } from './lit-cart/lit-cart.component';
import { LitGamesComponent } from './lit-games/lit-games.component';
import { LitCarrouselComponent } from './lit-carrousel/lit-carrousel.component';
import { LitGameComponent } from './lit-game/lit-game.component';
import { LitLilCartComponent } from './lit-lil-cart/lit-lil-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LitFooterComponent,
    LitHeaderComponent,
    LitCartComponent,
    LitGamesComponent,
    LitCarrouselComponent,
    LitGameComponent,
    LitLilCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
