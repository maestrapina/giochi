import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Gioco1Component } from './gioco1/gioco1.component';
import { ConcettiBaseGameComponent } from './concetti-base-game/concetti-base-game.component';
import { ColoriPrimariGameComponent } from './colori-primari-game/colori-primari-game.component';
import { FormeDimensioniGameComponent } from './forme-dimensioni-game/forme-dimensioni-game.component';
import { FormeGeometricheGameComponent } from './forme-geometriche-game/forme-geometriche-game.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gioco1',
    loadComponent: () => import('./gioco1/gioco1.component').then(m => m.Gioco1Component)
  },
  {
    path: 'flower-game',
    loadComponent: () => import('./flower-game/flower-game.component').then(m => m.FlowerGameComponent)
  },
  {
    path: 'color-game',
    loadComponent: () => import('./color-game/color-game.component').then(m => m.ColorGameComponent)
  },
  {
    path: 'mesi-game',
    loadComponent: () => import('./mesi-game/mesi-game.component').then(m => m.MesiGameComponent)
  },
  {
  path: 'concetti-base',
  component: ConcettiBaseGameComponent
},
{
  path: 'colori-primari',
  component: ColoriPrimariGameComponent
},
{
  path: 'forme-dimensioni',
  component: FormeDimensioniGameComponent
},
{
  path: 'forme-geometriche',
  component: FormeGeometricheGameComponent
},
  {
    path: 'pianeti-parte1-video-game',
    loadComponent: () => import('./pianeti-parte1-video-game/pianeti-parte1-video-game.component').then(m => m.PianetiParte1VideoGameComponent)
  },
  {
    path: 'pianeti-parte2-video-game',
    loadComponent: () => import('./pianeti-parte2-video-game/pianeti-parte2-video-game.component').then(m => m.PianetiParte2VideoGameComponent)
  },
  {
    path: 'pianeti-parte3-video-game',
    loadComponent: () => import('./pianeti-parte3-video-game/pianeti-parte3-video-game.component').then(m => m.PianetiParte3VideoGameComponent)
  },
  {
    path: 'pianeti-parte-completa-video-game',
    loadComponent: () => import('./pianeti-parte-completa-video-game/pianeti-parte-completa-video-game.component').then(m => m.PianetiParteCompletaVideoGameComponent)
  },
  {
    path: 'pianeti-game',
    loadComponent: () => import('./pianeti-game/pianeti-game.component').then(m => m.PianetiGameComponent)
  },
  {
    path: 'number-game',
    loadComponent: () => import('./number-game/number-game.component').then(m => m.NumberGameComponent)
  },
  {
    path: 'indovina-prima-lettera-game',
    loadComponent: () => import('./indovina-prima-lettera-game/indovina-prima-lettera-game.component').then(m => m.IndovinaPrimaLetteraGameComponent)
  }
];
