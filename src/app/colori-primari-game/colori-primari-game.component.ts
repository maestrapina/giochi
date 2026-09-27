import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Colore = 'rosso' | 'giallo' | 'blu';
type Modalita = 'ascolta' | 'riconosci';
type Oggetto = 'mela' | 'fiore' | 'palloncino' | 'stella' | 'auto' | 'sole';

interface Domanda {
  colore: Colore;
  modalita: Modalita;
  oggetto?: Oggetto;
}

@Component({
  selector: 'app-colori-primari-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colori-primari-game.component.html',
  styleUrl: './colori-primari-game.component.css'
})
export class ColoriPrimariGameComponent implements OnInit {

  domande: Domanda[] = [
    // FASE 1: solo ascolto, nessun colore mostrato al centro
    { colore: 'rosso', modalita: 'ascolta' },
    { colore: 'giallo', modalita: 'ascolta' },
    { colore: 'blu', modalita: 'ascolta' },

    // FASE 2: generalizzazione su oggetti diversi
    { colore: 'rosso', modalita: 'riconosci', oggetto: 'mela' },
    { colore: 'giallo', modalita: 'riconosci', oggetto: 'stella' },
    { colore: 'blu', modalita: 'riconosci', oggetto: 'palloncino' },
    { colore: 'rosso', modalita: 'riconosci', oggetto: 'fiore' },
    { colore: 'giallo', modalita: 'riconosci', oggetto: 'sole' },
    { colore: 'blu', modalita: 'riconosci', oggetto: 'auto' }
  ];

  indiceDomanda = 0;
  stelle = 0;
  feedback: 'corretto' | 'sbagliato' | null = null;
  rispostaSelezionata: Colore | null = null;
  giocoTerminato = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => this.leggiConsegna(), 650);
  }

  get domandaCorrente(): Domanda {
    return this.domande[this.indiceDomanda];
  }

  get avanzamento(): string {
    return `${this.indiceDomanda + 1} / ${this.domande.length}`;
  }

  get titoloLivello(): string {
    return this.domandaCorrente.modalita === 'ascolta'
      ? 'Ascolta e trova'
      : 'Guarda e riconosci';
  }

  get titoloDomanda(): string {
    return this.domandaCorrente.modalita === 'ascolta'
      ? 'Ascolta il colore'
      : 'Che colore è?';
  }

  seleziona(colore: Colore): void {
    if (this.feedback || this.giocoTerminato) {
      return;
    }

    if (this.rispostaSelezionata === colore) {
      this.conferma(colore);
      return;
    }

    this.rispostaSelezionata = colore;
    this.parla(`${this.etichetta(colore)}. Tocca ancora per confermare.`);
  }

  conferma(colore: Colore): void {
    if (colore === this.domandaCorrente.colore) {
      this.feedback = 'corretto';
      this.stelle++;
      this.parla('Bravissimo!');

      setTimeout(() => this.prossima(), 1300);
    } else {
      this.feedback = 'sbagliato';
      this.parla('Riprova!');

      setTimeout(() => {
        this.feedback = null;
        this.rispostaSelezionata = null;
      }, 900);
    }
  }

  prossima(): void {
    this.feedback = null;
    this.rispostaSelezionata = null;

    if (this.indiceDomanda < this.domande.length - 1) {
      this.indiceDomanda++;
      setTimeout(() => this.leggiConsegna(), 250);
    } else {
      this.giocoTerminato = true;
      this.parla('Bravissimo! Hai completato il gioco dei colori!');
    }
  }

  leggiConsegna(): void {
    if (this.giocoTerminato) {
      return;
    }

    if (this.domandaCorrente.modalita === 'ascolta') {
      this.parla(`Tocca il colore ${this.etichetta(this.domandaCorrente.colore)}.`);
    } else {
      this.parla('Guarda bene. Che colore è?');
    }
  }

  etichetta(colore: Colore): string {
    return colore.charAt(0).toUpperCase() + colore.slice(1);
  }

  parla(testo: string): void {
    if (!('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const frase = new SpeechSynthesisUtterance(testo);
    frase.lang = 'it-IT';
    frase.rate = 0.92;
    frase.pitch = 1;
    frase.volume = 1;

    const voci = window.speechSynthesis.getVoices();

    const voceItaliana =
      voci.find(v => v.lang === 'it-IT' && /elsa|isabella/i.test(v.name)) ||
      voci.find(v => v.lang === 'it-IT') ||
      voci.find(v => v.lang?.startsWith('it'));

    if (voceItaliana) {
      frase.voice = voceItaliana;
    }

    window.speechSynthesis.speak(frase);
  }

  ricomincia(): void {
    this.indiceDomanda = 0;
    this.stelle = 0;
    this.feedback = null;
    this.rispostaSelezionata = null;
    this.giocoTerminato = false;

    setTimeout(() => this.leggiConsegna(), 300);
  }

  tornaHome(): void {
    this.router.navigate(['/']);
  }
}
