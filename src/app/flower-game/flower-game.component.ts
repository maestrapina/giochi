import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-flower-game',
  templateUrl: './flower-game.component.html',
  imports: [CommonModule],
  styleUrls: ['./flower-game.component.css'],
  standalone: true,
})
export class FlowerGameComponent implements OnInit {

  targetNumber: number = 0;
  flowers: boolean[] = [];
  coloredCount: number = 0;
  gameWon: boolean = false;
  haiCliccatoIlBottoneFine : boolean = false;

  vittoriaAudio = new Audio('assets/sounds/vittoria.mp3');
  sconfittaAudio = new Audio('assets/sounds/sconfitta.mp3');

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.targetNumber = Math.floor(Math.random() * 20) + 1;
    this.flowers = Array(20).fill(false); 
    this.coloredCount = 0;
    this.gameWon = false;
    this.haiCliccatoIlBottoneFine = false;
  }

  onFlowerClick(index: number) {
    if (this.flowers[index] || this.gameWon) return;

    this.flowers[index] = true;
    this.coloredCount++;

  }

  getFlowerImage(index: number): string {
  return this.flowers[index]
    ? 'assets/img/fiore-colorato.png'   // quando cliccato (true)
    : 'assets/img/fiore-grigio.jpg';    // quando non cliccato (false)
}

  checkResult() {
    this.haiCliccatoIlBottoneFine = true
  if (this.coloredCount === this.targetNumber) {
    this.gameWon = true;
    this.vittoriaAudio.play();
  } else {
    this.sconfittaAudio.play();
    this.gameWon = false;
  }
}
  

}
