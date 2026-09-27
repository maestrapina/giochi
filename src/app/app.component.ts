import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <nav class="navbar">
      <button routerLink="/" class="nav-button">🏠 Home</button>
      <button routerLink="/gioco1" class="nav-button">🖊️ Scrivi il tuo nome</button>
      <button routerLink="/flower-game" class="nav-button">🌸 Colora i fiori</button>
      <button routerLink="/color-game" class="nav-button">🎨 Crea i colori</button>
      <button routerLink="/mesi-game" class="nav-button">📅 Gioca con i mesi</button>
      <button routerLink="/pianeti-parte1-video-game" class="nav-button">🌍 Gioca con i pianeti</button>
      <button routerLink="/number-game" class="nav-button">✏️ Gioca con i numeri</button>
      <button routerLink="/indovina-prima-lettera-game" class="nav-button">Gioca con le lettere</button>
      
      </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
