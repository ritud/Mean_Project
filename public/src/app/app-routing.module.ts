import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AddComponent } from './add/add.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent,
  },
  {
  path:'new_question',
  component:AddComponent,
  },
  {
    path:'lets_play',
    component:GameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
