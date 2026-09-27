import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Tipo = 'sopra-sotto' | 'dentro-fuori' | 'vicino-lontano' | 'aperto-chiuso';
type Risposta = 'sopra' | 'sotto' | 'dentro' | 'fuori' | 'vicino' | 'lontano' | 'aperto' | 'chiuso';

interface Domanda {
  tipo: Tipo;
  rispostaCorretta: Risposta;
  frase: string;
  titolo: string;
  scena: string;
}

@Component({
  selector: 'app-concetti-base-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concetti-base-game.component.html',
  styleUrl: './concetti-base-game.component.css'
})
export class ConcettiBaseGameComponent implements OnInit {

  domande: Domanda[] = [
    { tipo:'sopra-sotto', rispostaCorretta:'sopra', frase:'Dove si trova la palla? Sopra o sotto il tavolo?', titolo:'Dove si trova la palla?', scena:'palla-sopra-tavolo' },
    { tipo:'sopra-sotto', rispostaCorretta:'sotto', frase:'Dove si trova il gatto? Sopra o sotto la sedia?', titolo:'Dove si trova il gatto?', scena:'gatto-sotto-sedia' },
    { tipo:'dentro-fuori', rispostaCorretta:'dentro', frase:"Dove si trova l'orsetto? Dentro o fuori dalla scatola?", titolo:"Dove si trova l'orsetto?", scena:'orsetto-dentro-scatola' },
    { tipo:'dentro-fuori', rispostaCorretta:'fuori', frase:'Dove si trova la palla? Dentro o fuori dal cesto?', titolo:'Dove si trova la palla?', scena:'palla-fuori-cesto' },
    { tipo:'vicino-lontano', rispostaCorretta:'vicino', frase:'Dove si trova il cane? Vicino o lontano dalla cuccia?', titolo:'Dove si trova il cane?', scena:'cane-vicino-cuccia' },
    { tipo:'vicino-lontano', rispostaCorretta:'lontano', frase:"Dove si trova l'ape? Vicino o lontano dal fiore?", titolo:"Dove si trova l'ape?", scena:'ape-lontano-fiore' },
    { tipo:'aperto-chiuso', rispostaCorretta:'aperto', frase:'Guarda la scatola. È aperta o chiusa?', titolo:'Com’è la scatola?', scena:'scatola-aperta' },
    { tipo:'aperto-chiuso', rispostaCorretta:'chiuso', frase:'Guarda la porta. È aperta o chiusa?', titolo:'Com’è la porta?', scena:'porta-chiusa' }
  ];

  indiceDomanda = 0;
  stelle = 0;
  feedback: 'corretto' | 'sbagliato' | null = null;
  rispostaSelezionata: Risposta | null = null;
  giocoTerminato = false;

  constructor(private router: Router) {}

  ngOnInit(): void { setTimeout(() => this.leggiConsegna(), 600); }

  get domandaCorrente(): Domanda { return this.domande[this.indiceDomanda]; }
  get avanzamento(): string { return `${this.indiceDomanda + 1} / ${this.domande.length}`; }

  get opzioni(): Risposta[] {
    switch (this.domandaCorrente.tipo) {
      case 'sopra-sotto': return ['sopra','sotto'];
      case 'dentro-fuori': return ['dentro','fuori'];
      case 'vicino-lontano': return ['vicino','lontano'];
      case 'aperto-chiuso': return ['aperto','chiuso'];
    }
  }

  get titoloLivello(): string {
    return this.opzioni.map(x => this.etichetta(x)).join(' / ');
  }

  seleziona(risposta: Risposta): void {
    if (this.feedback || this.giocoTerminato) return;
    if (this.rispostaSelezionata === risposta) {
      this.conferma(risposta);
      return;
    }
    this.rispostaSelezionata = risposta;
    this.parla(`${this.etichetta(risposta)}. Tocca ancora per confermare.`);
  }

  conferma(risposta: Risposta): void {
    if (risposta === this.domandaCorrente.rispostaCorretta) {
      this.feedback = 'corretto';
      this.stelle++;
      this.parla('Bravissimo!');
      setTimeout(() => this.prossima(), 1300);
    } else {
      this.feedback = 'sbagliato';
      this.parla('Riprova!');
      setTimeout(() => { this.feedback = null; this.rispostaSelezionata = null; }, 900);
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
      this.parla('Bravissimo! Hai completato il gioco!');
    }
  }

  leggiConsegna(): void { if (!this.giocoTerminato) this.parla(this.domandaCorrente.frase); }

  etichetta(r: Risposta): string {
    return r.charAt(0).toUpperCase() + r.slice(1);
  }

  parla(testo: string): void {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const frase = new SpeechSynthesisUtterance(testo);
    frase.lang = 'it-IT'; frase.rate = 0.92; frase.pitch = 1; frase.volume = 1;
    const voci = window.speechSynthesis.getVoices();
    const voce = voci.find(v => v.lang === 'it-IT' && /elsa|isabella/i.test(v.name))
      || voci.find(v => v.lang === 'it-IT')
      || voci.find(v => v.lang?.startsWith('it'));
    if (voce) frase.voice = voce;
    window.speechSynthesis.speak(frase);
  }

  ricomincia(): void {
    this.indiceDomanda = 0; this.stelle = 0; this.feedback = null;
    this.rispostaSelezionata = null; this.giocoTerminato = false;
    setTimeout(() => this.leggiConsegna(), 300);
  }

  tornaHome(): void { this.router.navigate(['/']); }
}
