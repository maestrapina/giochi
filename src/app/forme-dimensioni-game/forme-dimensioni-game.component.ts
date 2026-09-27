import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Tipo='dimensione'|'quantita';
type Risposta='grande'|'piccolo'|'uno'|'pochi'|'tanti';
interface Domanda{tipo:Tipo;rispostaCorretta:Risposta;frase:string;ordine?:'grande-sx'|'grande-dx';oggetto?:'mele'|'stelle'|'palline'}

@Component({selector:'app-forme-dimensioni-game',standalone:true,imports:[CommonModule],templateUrl:'./forme-dimensioni-game.component.html',styleUrl:'./forme-dimensioni-game.component.css'})
export class FormeDimensioniGameComponent implements OnInit{
  domande:Domanda[]=[
    {tipo:'dimensione',rispostaCorretta:'grande',frase:'Tocca la palla grande.',ordine:'grande-sx'},
    {tipo:'dimensione',rispostaCorretta:'piccolo',frase:'Tocca la palla piccola.',ordine:'grande-dx'},
    {tipo:'quantita',rispostaCorretta:'uno',frase:'Dove ce n’è uno?',oggetto:'mele'},
    {tipo:'quantita',rispostaCorretta:'pochi',frase:'Dove ce ne sono pochi?',oggetto:'stelle'},
    {tipo:'quantita',rispostaCorretta:'tanti',frase:'Dove ce ne sono tanti?',oggetto:'palline'},
    {tipo:'dimensione',rispostaCorretta:'grande',frase:'Tocca la palla grande.',ordine:'grande-dx'}
  ];

  indiceDomanda=0;stelle=0;feedback:'corretto'|'sbagliato'|null=null;rispostaSelezionata:Risposta|null=null;giocoTerminato=false;
  constructor(private router:Router){}
  ngOnInit(){setTimeout(()=>this.leggiConsegna(),600)}
  get domandaCorrente(){return this.domande[this.indiceDomanda]}
  get avanzamento(){return `${this.indiceDomanda+1} / ${this.domande.length}`}
  get titolo(){return this.domandaCorrente.tipo==='dimensione'?'Grande / Piccolo':'Uno / Pochi / Tanti'}

  seleziona(r:Risposta){
    if(this.feedback||this.giocoTerminato)return;
    if(this.rispostaSelezionata===r){this.conferma(r);return}
    this.rispostaSelezionata=r;this.parla(`${this.etichetta(r)}. Tocca ancora per confermare.`);
  }
  conferma(r:Risposta){
    if(r===this.domandaCorrente.rispostaCorretta){this.feedback='corretto';this.stelle++;this.parla('Bravissimo!');setTimeout(()=>this.prossima(),1200)}
    else{this.feedback='sbagliato';this.parla('Riprova!');setTimeout(()=>{this.feedback=null;this.rispostaSelezionata=null},900)}
  }
  prossima(){this.feedback=null;this.rispostaSelezionata=null;if(this.indiceDomanda<this.domande.length-1){this.indiceDomanda++;setTimeout(()=>this.leggiConsegna(),250)}else{this.giocoTerminato=true;this.parla('Bravissimo! Hai completato il gioco!')}}
  leggiConsegna(){this.parla(this.domandaCorrente.frase)}
  etichetta(r:Risposta){switch(r){case'grande':return'Grande';case'piccolo':return'Piccolo';case'uno':return'Uno';case'pochi':return'Pochi';case'tanti':return'Tanti'}}
  parla(t:string){if(!('speechSynthesis'in window))return;window.speechSynthesis.cancel();const f=new SpeechSynthesisUtterance(t);f.lang='it-IT';f.rate=.92;f.pitch=1;f.volume=1;const v=window.speechSynthesis.getVoices();const it=v.find(x=>x.lang==='it-IT'&&/elsa|isabella/i.test(x.name))||v.find(x=>x.lang==='it-IT')||v.find(x=>x.lang?.startsWith('it'));if(it)f.voice=it;window.speechSynthesis.speak(f)}
  ricomincia(){this.indiceDomanda=0;this.stelle=0;this.feedback=null;this.rispostaSelezionata=null;this.giocoTerminato=false;setTimeout(()=>this.leggiConsegna(),300)}
  tornaHome(){this.router.navigate(['/'])}
}
