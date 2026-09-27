import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Tipi sicuri per i nomi dei pianeti
type PianetaKey1 = 'mercurio' | 'venere' | 'terra';
type PianetaKey2 = 'marte' | 'giove' | 'saturno';
type PianetaKey3 = 'urano' | 'nettuno' | 'plutone';
type PianetaKey4 = PianetaKey1 | PianetaKey2 | PianetaKey3;

type PianetiCoords<K extends string> = Record<K, { x: number; y: number; w: number; h: number }>;

// Mappa globale dei set
type PianetiSet = {
  pianeti1: PianetiCoords<PianetaKey1>;
  pianeti2: PianetiCoords<PianetaKey2>;
  pianeti3: PianetiCoords<PianetaKey3>;
  pianeti4: PianetiCoords<PianetaKey4>;
};

@Component({
  selector: 'app-pianeti-game',
  templateUrl: './pianeti-game.component.html',
  styleUrls: ['./pianeti-game.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PianetiGameComponent implements OnInit {
  domanda = '';
  feedback = '';
  privateScelta: keyof PianetiSet = 'pianeti1';
  pianetaCorrente: PianetaKey1 = 'mercurio'; // inizializzato per sicurezza
  lastClick: { x: number; y: number } | null = null;
  vittoriaAudio = new Audio('assets/sounds/vittoria.mp3');
  sconfittaAudio = new Audio('assets/sounds/sconfitta.mp3');

  pianeti1: PianetiCoords<PianetaKey1> = {
    mercurio: { x: 87.89, y: 85.49, w: 4.49, h: 7.94 },
    venere: { x: 66.6, y: 79.78, w: 6.87, h: 10.4 },
    terra: { x: 34.69, y: 26.18, w: 9.54, h: 17.82 },
  };

  pianeti2: PianetiCoords<PianetaKey2> = {
    marte: { x: 87.89, y: 85.49, w: 4.49, h: 7.94 },
    giove: { x: 66.6, y: 79.78, w: 6.87, h: 10.4 },
    saturno: { x: 34.69, y: 26.18, w: 9.54, h: 17.82 },
  };

  pianeti3: PianetiCoords<PianetaKey3> = {
    urano: { x: 87.89, y: 85.49, w: 4.49, h: 7.94 },
    nettuno: { x: 66.6, y: 79.78, w: 6.87, h: 10.4 },
    plutone: { x: 34.69, y: 26.18, w: 9.54, h: 17.82 },
  };

  pianeti4: PianetiCoords<PianetaKey4> = {
    mercurio: { x: 87.89, y: 85.49, w: 4.49, h: 7.94 },
    venere: { x: 66.6, y: 79.78, w: 6.87, h: 10.4 },
    terra: { x: 34.69, y: 26.18, w: 9.54, h: 17.82 },
    marte: { x: 54.85, y: 7.87, w: 8.46, h: 18.25 },
    giove: { x: 8.23, y: 9.24, w: 13.849999999999998, h: 28.479999999999997 },
    saturno: { x: 49.07, y: 53.41, w: 13.049999999999997, h: 18.75 },
    urano: { x: 86.12, y: 19.13, w: 6.179999999999993, h: 15.52},
    nettuno: { x: 79.65, y: 49.31, w: 9.059999999999988, h: 19.269999999999996 },
    plutone: { x: 73.87, y: 9.07, w: 4.3799999999999955, h: 9.89 },
  };

  getPianeti() {
    return this[this.privateScelta] as PianetiSet[keyof PianetiSet];
  }

  ngOnInit(): void {
    this.setDomandaRandom();
  }

  setDomandaRandom() {
    const pianeti = this.getPianeti();
    const keys = Object.keys(pianeti) as Array<keyof typeof pianeti>;
    console.log("setDomandaRandom");
    // 🔁 Filtra via il pianeta corrente
    const availableKeys = keys.filter((key) => key !== this.pianetaCorrente);

    const randomKey = availableKeys[Math.floor(Math.random() * availableKeys.length)];
    this.pianetaCorrente = randomKey as any;

    const audio = new Audio(`assets/sounds/${randomKey}.mp3`);
    audio.play();

    this.domanda = `Dove si trova ${this.capitalize(String(randomKey))}?`;
    this.feedback = '';
  }

  clicksPerc: { x: number; y: number }[] = [];

  gestisciClick(event: MouseEvent) {
  const img = event.target as HTMLImageElement;
  const rect = img.getBoundingClientRect();

  const xPerc = ((event.clientX - rect.left) / rect.width) * 100;
  const yPerc = ((event.clientY - rect.top) / rect.height) * 100;

  const x = +xPerc.toFixed(2);
  const y = +yPerc.toFixed(2);

  this.lastClick = { x, y };
  this.clicksPerc.push({ x, y });

  console.log(`Hai cliccato: x=${x}%, y=${y}%`);

  if (this.clicksPerc.length === 2) {
    const [p1, p2] = this.clicksPerc;

    const xMin = Math.min(p1.x, p2.x);
    const yMin = Math.min(p1.y, p2.y);
    const width = Math.abs(p2.x - p1.x);
    const height = Math.abs(p2.y - p1.y);

    console.log('🧮 Coordinate calcolate in percentuale:');
    console.log(`x: ${xMin}%`);
    console.log(`y: ${yMin}%`);
    console.log(`w: ${width}%`);
    console.log(`h: ${height}%`);

    this.clicksPerc = [];
  }

  // Prendi il gruppo giusto
  let pianeta;
  if (this.privateScelta === 'pianeti1') {
    pianeta = this.pianeti1[this.pianetaCorrente as PianetaKey1];
    //this.setDomandaRandom();
  } else if (this.privateScelta === 'pianeti2') {
    pianeta = this.pianeti2[this.pianetaCorrente as PianetaKey2];
    //this.setDomandaRandom();
  } else if (this.privateScelta === 'pianeti3') {
    pianeta = this.pianeti3[this.pianetaCorrente as PianetaKey3];
    //this.setDomandaRandom();
  } else {
    pianeta = this.pianeti4[this.pianetaCorrente as PianetaKey4];
    //this.setDomandaRandom();
  }

  if (!pianeta) {
    console.warn('⚠️ Nessun pianeta trovato per il gruppo corrente.');
    return;
  }

  // Logica del gioco (feedback)
  if (
    x >= pianeta.x &&
    x <= pianeta.x + pianeta.w &&
    y >= pianeta.y &&
    y <= pianeta.y + pianeta.h
  ) {
    this.feedback = '✅ Bravo! Hai trovato il pianeta giusto!';
    this.vittoriaAudio.play();
    setTimeout(() => {
      this.setDomandaRandom();
    }, 5000);
  } else {
    this.feedback = '❌ Non è corretto. Riprova!';
    this.sconfittaAudio.play();
  }
}


  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    selezionaParte(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const parte = select.value;
  console.log(`Hai selezionato: ${parte}`);

  if (parte === 'parte1') {
    this.privateScelta = 'pianeti1';
  } else if (parte === 'parte2') {
    this.privateScelta = 'pianeti2';
  } else if (parte === 'parte3') {
    this.privateScelta = 'pianeti3';
  } else if (parte === 'parte4') {
    this.privateScelta = 'pianeti4';
  }

  // 🔥 Genera subito una nuova domanda
  setTimeout(() => {
      this.setDomandaRandom();
    }, 5000);
}

}
