import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-mesi-game',
    imports: [CommonModule,DragDropModule],
  standalone: true,
  templateUrl: './mesi-game.component.html',
  styleUrl: './mesi-game.component.css'
})
export class MesiGameComponent implements OnInit {
months = ['GENNAIO', 'FEBBRAIO', 'MARZO', 'APRILE', 'MAGGIO', 'GIUGNO', 'LUGLIO', 'AGOSTO', 'SETTEMBRE', 'OTTOBRE', 'NOVEMBRE', 'DICEMBRE'];
  
  feedbackMessage: string = '';
  displayedMonths: string[] = [];
  beforeBox: string[] = [];
  afterBox: string[] = [];
  firstSelectedMonth: string = '';
  secondSelectedMonth: string = '';

  firstSelectedMonthNumber: number = -1;
  secondSelectedMonthNumber: number = -1;
  meseInseritoCorretto : number  = 0; 
  meseInserito : number  = 0; 
  vittoriaAudio = new Audio('assets/sounds/vittoria.mp3');
  sconfittaAudio = new Audio('assets/sounds/sconfitta.mp3');

  italianVoices: SpeechSynthesisVoice[] = [];

  ngOnInit(): void {
  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      this.italianVoices = voices.filter(voice => voice.lang === 'it-IT');
      console.log('Voci italiane disponibili:');
      this.italianVoices.forEach(voice => {
        console.log(`Nome: ${voice.name}, Lingua: ${voice.lang}`);
      });
    }
  };

  loadVoices(); // prova subito a caricare le voci

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      loadVoices(); // ricarica quando cambia la lista delle voci
    };
  }
}


  

  constructor() {
    this.pickTwoMonths();
  }


  pickTwoMonths() {
  this.beforeBox = [];
  this.afterBox = [];
  this.feedbackMessage = '';
  this.feedbackMessage= '';
  this.displayedMonths= [];
  this.firstSelectedMonth= '';
  this.secondSelectedMonth = '';
  this.firstSelectedMonthNumber -1;
  this.secondSelectedMonthNumber = -1;
  this.meseInseritoCorretto = 0; 
  this.meseInserito  = 0; 
  

  const shuffled = [...this.months].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 2);

  const index1 = this.months.indexOf(selected[0]);
  const index2 = this.months.indexOf(selected[1]);

  [selected[0], selected[1]].forEach((item, i) => {
  const index = this.months.indexOf(item);
  if (index === -1) {
    console.log(`Il mese ${item} non è stato trovato.`);
  } else {
    console.log(`Il mese ${item} si trova alla posizione ${index}.`);
  }
});


  if (index1 < index2) {
    this.firstSelectedMonth = selected[0];
    this.secondSelectedMonth = selected[1];
  } else {
    this.firstSelectedMonth = selected[1];
    this.secondSelectedMonth = selected[0];
  }

  this.displayedMonths = selected;
}


speak(month: string): void {
  const utterance = new SpeechSynthesisUtterance(month);
  utterance.lang = 'it-IT';

  // Trova tutte le voci italiane
  const italianVoices = window.speechSynthesis.getVoices().filter(voice => voice.lang === 'it-IT');

  // Prova a trovare una voce maschile: puoi provare a cercare voci con nomi tipici maschili o con "Male" nel nome
  let maleVoice = italianVoices.find(voice => 
    voice.name.toLowerCase().includes('cosimo') ||
    voice.name.toLowerCase().includes('male') ||
    voice.name.toLowerCase().includes('luca') 
  );

  if (!maleVoice) {
    maleVoice = italianVoices[0];
  }

  if (maleVoice) {
    utterance.voice = maleVoice;
  }

  window.speechSynthesis.speak(utterance);
}



  drop(event: any, box: 'before' | 'after') {
  const draggedMonth = event.item.data;
  console.log(draggedMonth)

  
  if (!this.displayedMonths.includes(draggedMonth)) return;

  this.displayedMonths = this.displayedMonths.filter(m => m !== draggedMonth);

  if (box === 'before') {
    this.beforeBox.push(draggedMonth);
    
    if (draggedMonth === this.firstSelectedMonth) {
      this.meseInseritoCorretto +=1;
      this.meseInserito+=1;
    } else {
      this.meseInserito+=1;
    }

  } else {
    this.afterBox.push(draggedMonth);

    if (draggedMonth === this.secondSelectedMonth) {
       this.meseInseritoCorretto +=1;
       this.meseInserito+=1;
    } else {
      this.meseInserito+=1;
    }
  }
if (this.meseInserito >1){
  if ( this.meseInseritoCorretto > 1 ){
    this.feedbackMessage = "✅ Corretto!"
    this.vittoriaAudio.play();
    setTimeout(() => {
  if (this.meseInseritoCorretto > 1) {
    this.feedbackMessage = "✅ Corretto!";
    this.vittoriaAudio.play();
    this.pickTwoMonths();
  } else {
    this.feedbackMessage = '❌ Sbagliato! Riprova.';
    this.sconfittaAudio.play();
    this.pickTwoMonths();
  }
}, 2000);  
  }
  else{
    this.feedbackMessage = '❌ Sbagliato! Riprova.';
    this.sconfittaAudio.play();
    setTimeout(() => {
  if (this.meseInseritoCorretto > 1) {
    this.feedbackMessage = "✅ Corretto!";
    this.vittoriaAudio.play();
    this.pickTwoMonths();
  } else {
    this.feedbackMessage = '❌ Sbagliato! Riprova.';
    this.sconfittaAudio.play();
    this.pickTwoMonths();
  }
}, 2000);  
  }
}
}


}