import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pianeti-parte-completa-video-game',
  imports: [],
  templateUrl: './pianeti-parte-completa-video-game.component.html',
  styleUrl: './pianeti-parte-completa-video-game.component.css'
})
export class PianetiParteCompletaVideoGameComponent {
constructor(private router: Router) {}

  vaiAlGioco() {
    this.router.navigate(['/pianeti-game']);
  }
  selezionaParte(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const parte = select.value;
  console.log(`Hai selezionato: ${parte}`);

   if (parte === 'parte1') {
      this.router.navigate(['pianeti-parte1-video-game']);
    } else if (parte === 'parte2') {
      this.router.navigate(['pianeti-parte2-video-game']);
    } else if (parte === 'parte3') {
      this.router.navigate(['pianeti-parte3-video-game']);
    } else if (parte === 'parte4') {
      this.router.navigate(['/pianeti-parte-completa-video-game']);
    }
}
}