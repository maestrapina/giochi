import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-color-game',
  templateUrl: './color-game.component.html',
  styleUrls: ['./color-game.component.css'],
  imports: [CommonModule,DragDropModule],
  standalone: true
})
export class ColorGameComponent {

  vittoriaAudio = new Audio('assets/sounds/vittoria.mp3');
  sconfittaAudio = new Audio('assets/sounds/sconfitta.mp3');
  primaryColors = ['rosso', 'blu', 'giallo'];
  secondaryColors = ['arancione', 'verde', 'viola', 'marrone'];
  previousColor: string = '';

  // Mappa combinazioni ordinate => colore secondario
  colorMixMap: Record<string, string> = {
    'giallo + rosso': 'arancione',
    'blu + giallo': 'verde',
    'blu + rosso': 'viola',
    'blu + giallo + rosso': 'marrone'
  };

  targetColor: string = '';
  selectedColors: string[] = [];
  message: string = '';

  constructor() {
    this.pickRandomColor();
  }
/*
  pickRandomColor() {
    // pesca un colore secondario casuale
    const idx = Math.floor(Math.random() * this.secondaryColors.length);
    console.log("colore scelto ",{idx})
    this.targetColor = this.secondaryColors[idx];
    this.selectedColors = [];
    this.message = `Trova quali colori primari formano il colore: ${this.targetColor}`;
  }*/

    pickRandomColor() {
  let idx: number;
  let newColor: string;

  do {
    idx = Math.floor(Math.random() * this.secondaryColors.length);
    newColor = this.secondaryColors[idx];
  } while (newColor === this.previousColor && this.secondaryColors.length > 1);

  this.previousColor = newColor;
  this.targetColor = newColor;
  this.selectedColors = [];
  this.message = `Trova quali colori primari formano il colore: ${this.targetColor}`;
}


  selectColor(color: string) {
    if (this.selectedColors.includes(color)) {
      return;
    }

    this.selectedColors.push(color);

    
    const needed = this.targetColor === 'marrone' ? 3 : 2;
    /*
    if (this.selectedColors.length === needed) {
      this.checkCombination();
    }*/
  }

  checkCombination() {
    // Ordino e genero la chiave
    const sorted = [...this.selectedColors].sort().join(' + ');

    if (this.colorMixMap[sorted] === this.targetColor) {
      this.message = 'Bravo! Hai scelto i colori giusti!';
      this.vittoriaAudio.play();
    } else {
      this.message = 'Ops! Riprova!';
      this.sconfittaAudio.play();
    }

    // Dopo 2 secondi cambio colore
    setTimeout(() => this.pickRandomColor(), 2000);
  }

  getButtonColor(color: string): string {
    switch (color) {
      case 'rosso': return 'red';
      case 'blu': return 'blue';
      case 'giallo': return 'yellow';
      default: return 'gray';
    }
  }
}
