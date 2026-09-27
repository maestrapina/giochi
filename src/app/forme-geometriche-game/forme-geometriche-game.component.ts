import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Forma='cerchio'|'quadrato';
type Modalita='forma'|'oggetto';
interface Domanda{forma:Forma;modalita:Modalita;oggetto?:'piatto'|'finestra'}

@Component({selector:'app-forme-geometriche-game',standalone:true,imports:[CommonModule],templateUrl:'./forme-geometriche-game.component.html',styleUrl:'./forme-geometriche-game.component.css'})
export class FormeGeometricheGameComponent implements OnInit{
  domande:Domanda[]=[
    {forma:'cerchio',modalita:'forma'},
    {forma:'quadrato',modalita:'forma'},
    {forma:'cerchio',modalita:'forma'},
    {forma:'quadrato',modalita:'forma'},
    {forma:'cerchio',modalita:'oggetto',oggetto:'piatto'},
    {forma:'quadrato',modalita:'oggetto',oggetto:'finestra'}
  ];
  indiceDomanda=0;stelle=0;feedback:'corretto'|'sbagliato'|null=null;rispostaSelezionata:Forma|null=null;giocoTerminato=false;
  constructor(private router:Router){}
  ngOnInit(){setTimeout(()=>this.leggiConsegna(),600)}
  get domandaCorrente(){return this.domande[this.indiceDomanda]}
  get avanzamento(){return `${this.indiceDomanda+1} / ${this.domande.length}`}
  get titolo(){return this.domandaCorrente.modalita==='forma'?'Riconosci la forma':'Trova la forma nel mondo'}

  seleziona(f:Forma){if(this.feedback||this.giocoTerminato)return;if(this.rispostaSelezionata===f){this.conferma(f);return}this.rispostaSelezionata=f;this.parla(`${this.etichetta(f)}. Tocca ancora per confermare.`)}
  conferma(f:Forma){if(f===this.domandaCorrente.forma){this.feedback='corretto';this.stelle++;this.parla('Bravissimo!');setTimeout(()=>this.prossima(),1200)}else{this.feedback='sbagliato';this.parla('Riprova!');setTimeout(()=>{this.feedback=null;this.rispostaSelezionata=null},900)}}
  prossima(){this.feedback=null;this.rispostaSelezionata=null;if(this.indiceDomanda<this.domande.length-1){this.indiceDomanda++;setTimeout(()=>this.leggiConsegna(),250)}else{this.giocoTerminato=true;this.parla('Bravissimo! Hai completato il gioco delle forme!')}}
  leggiConsegna(){if(this.domandaCorrente.modalita==='forma')this.parla('Che forma è? Cerchio o quadrato?');else this.parla(`Guarda ${this.domandaCorrente.oggetto==='piatto'?'il piatto':'la finestra'}. A quale forma assomiglia?`)}
  etichetta(f:Forma){return f==='cerchio'?'Cerchio':'Quadrato'}
  parla(t:string){if(!('speechSynthesis'in window))return;window.speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang='it-IT';u.rate=.92;u.pitch=1;u.volume=1;const v=window.speechSynthesis.getVoices();const it=v.find(x=>x.lang==='it-IT'&&/elsa|isabella/i.test(x.name))||v.find(x=>x.lang==='it-IT')||v.find(x=>x.lang?.startsWith('it'));if(it)u.voice=it;window.speechSynthesis.speak(u)}
  ricomincia(){this.indiceDomanda=0;this.stelle=0;this.feedback=null;this.rispostaSelezionata=null;this.giocoTerminato=false;setTimeout(()=>this.leggiConsegna(),300)}
  tornaHome(){this.router.navigate(['/'])}
}
