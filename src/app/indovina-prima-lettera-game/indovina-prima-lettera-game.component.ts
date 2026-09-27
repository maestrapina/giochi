import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-indovina-prima-lettera-game',
  templateUrl: './indovina-prima-lettera-game.component.html',
  styleUrls: ['./indovina-prima-lettera-game.component.css'],
  imports: [CommonModule, DragDropModule, FontAwesomeModule, FormsModule],
   standalone: true,

})
export class IndovinaPrimaLetteraGameComponent implements OnInit{
  step: 'select' | 'play' = 'select';
  numGroups = 1;
  groups: { name: string; points: number }[] = [];
  userInput = '';


  currentImageIndex = 0;
  vittoriaAudio = new Audio('assets/sounds/vittoria.mp3');
  sconfittaAudio = new Audio('assets/sounds/sconfitta.mp3');

  images = [
    { name: 'Sole', src: 'assets/img/indovinaPrimaLettera/sole.jpg', letter: 'S' },
    { name: 'Mela', src: 'assets/img/indovinaPrimaLettera/mela.jpg', letter: 'M' },
    { name: 'Gufo', src: 'assets/img/indovinaPrimaLettera/gufo.jpg', letter: 'G' },
    { name: 'Ananas', src: 'assets/img/indovinaPrimaLettera/ananas.jpg', letter: 'A' },
    { name: 'Arancia', src: 'assets/img/indovinaPrimaLettera/arancia.jpg', letter: 'A' },
    { name: 'Dinosauro', src: 'assets/img/indovinaPrimaLettera/dinosauro.png', letter: 'D' },
    { name: 'Elefante', src: 'assets/img/indovinaPrimaLettera/elefante.jpg', letter: 'E' },
    { name: 'Fiore', src: 'assets/img/indovinaPrimaLettera/fiore.jpg', letter: 'F' },
    { name: 'Fragola', src: 'assets/img/indovinaPrimaLettera/fragola.jpg', letter: 'F' },
    { name: 'Hotel', src: 'assets/img/indovinaPrimaLettera/hotel.jpg', letter: 'H' },
    { name: 'Ippopotamo', src: 'assets/img/indovinaPrimaLettera/ippopotamo.jpg', letter: 'I' },
    { name: 'Kiwi', src: 'assets/img/indovinaPrimaLettera/kiwi.jpg', letter: 'K' },
    { name: 'Leone', src: 'assets/img/indovinaPrimaLettera/leone.jpg', letter: 'L' },
    { name: 'Mucca', src: 'assets/img/indovinaPrimaLettera/mucca.jpg', letter: 'M' },
    { name: 'Nave', src: 'assets/img/indovinaPrimaLettera/nave.png', letter: 'N' },
    { name: 'Orso', src: 'assets/img/indovinaPrimaLettera/orso.jpg', letter: 'O' },
    { name: 'Pera', src: 'assets/img/indovinaPrimaLettera/pera.jpg', letter: 'P' },
    { name: 'Pinguino', src: 'assets/img/indovinaPrimaLettera/pinguino.jpg', letter: 'P' },
    { name: 'Quadro', src: 'assets/img/indovinaPrimaLettera/quadro.jpg', letter: 'Q' },
    { name: 'Scoiattolo', src: 'assets/img/indovinaPrimaLettera/scoiattolo.jpg', letter: 'S' },
    { name: 'Sole', src: 'assets/img/indovinaPrimaLettera/sole.jpg', letter: 'S' },
    { name: 'Tartaruga', src: 'assets/img/indovinaPrimaLettera/tartaruga.jpg', letter: 'T' },
    { name: 'Uva', src: 'assets/img/indovinaPrimaLettera/uva.jpg', letter: 'U' },
    { name: 'Volpe', src: 'assets/img/indovinaPrimaLettera/volpe.jpg', letter: 'V' },
    { name: 'Zebra', src: 'assets/img/indovinaPrimaLettera/zebra.png', letter: 'Z' },

  ];

  feedbackMessage = '';
  faEraser = faEraser;
  availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z'];
  constructedLetters: string[] = [];

  @ViewChild('dropZone') dropZone!: ElementRef;
selectedGroupIndex = 0;
  selectGroups(num: number) {
    this.numGroups = num;
    this.groups = Array.from({ length: num }, (_, i) => ({
      name: `Gruppo ${i + 1}`,
      points: 0
    }));
    this.step = 'play';
  }

  
  //currentImage = this.images[this.currentImageIndex];
  currentImage = this.images[this.currentImageIndex];

  ngOnInit(): void {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * this.images.length);
    } while (randomIndex === this.currentImageIndex);

    this.currentImageIndex = randomIndex;
    this.currentImage = this.images[this.currentImageIndex];
  }
/*
   let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * this.images.length);
    } while (randomIndex === this.currentImageIndex);

    this.currentImageIndex = randomIndex;
    this.currentImage = this.images[this.currentImageIndex];

    */
/*
  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentImageIndex];
    this.feedbackMessage = '';
    this.userInput = ''
    this.constructedLetters = []

    // Passa al gruppo successivo automaticamente (ma resta modificabile)
  this.selectedGroupIndex = (this.selectedGroupIndex + 1) % this.groups.length;
  }*/

  nextImage() {
    // Seleziona un indice casuale diverso dall'attuale
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * this.images.length);
    } while (randomIndex === this.currentImageIndex);

    this.currentImageIndex = randomIndex;
    this.currentImage = this.images[this.currentImageIndex];
    this.feedbackMessage = '';
    this.userInput = '';
    this.constructedLetters = [];

    // Passa al gruppo successivo automaticamente (ma resta modificabile)
    this.selectedGroupIndex = (this.selectedGroupIndex + 1) % this.groups.length;
}


  onDragEnd(event: CdkDragEnd, letter: string) {
    const dropRect = this.dropZone.nativeElement.getBoundingClientRect();

    // Ottieni la posizione corrente dell'elemento trascinato
    const dragElement = event.source.element.nativeElement;
    const centerX = dragElement.getBoundingClientRect().left + dragElement.offsetWidth / 2;
    const centerY = dragElement.getBoundingClientRect().top + dragElement.offsetHeight / 2;

    // Verifica se il centro del drag è dentro l'area di drop
    const isInDropZone =
      centerX >= dropRect.left &&
      centerX <= dropRect.right &&
      centerY >= dropRect.top &&
      centerY <= dropRect.bottom;

    if (isInDropZone) {
      this.constructedLetters.push(letter);
    }

    // Rimette la lettera nella posizione originale visiva
    event.source.reset();

    //console.log(this.constructedLetters)
  }

  reset() {
    this.constructedLetters = [];
  }

  controllaIlRisultato() {
    console.log(this.currentImage)
    console.log(this.constructedLetters)

    const ultimaLettera = this.constructedLetters[this.constructedLetters.length - 1];

    if (ultimaLettera === this.currentImage.letter) {
      console.log("✅ Corretto!");
      this.feedbackMessage = '✅ Corretto!';
      this.vittoriaAudio.play();
      this.groups[this.selectedGroupIndex].points += 1;
      

    } else {
      console.log(`❌ Sbagliato! Era "${this.currentImage.letter}"`);
      this.feedbackMessage = '❌ Sbagliato! Era "${this.currentImage.letter}';
      this.sconfittaAudio.play();
    }

    setTimeout(() => {
  this.nextImage();}, 2000);  

    
  }

  removeLast() {
  this.constructedLetters.pop();
}

}
