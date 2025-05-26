import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Gioco1Component } from './gioco1/gioco1.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gioco1',
    loadComponent: () => import('./gioco1/gioco1.component').then(m => m.Gioco1Component)
  }
];
