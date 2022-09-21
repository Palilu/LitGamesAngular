import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LitCartComponent } from './lit-cart/lit-cart.component';
import { LitGamesComponent } from './lit-games/lit-games.component';

const routes: Routes = [
  {path: '', redirectTo: 'games', pathMatch: 'full'},
  {path: 'games', component: LitGamesComponent},
  {path: 'cart', component: LitCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
