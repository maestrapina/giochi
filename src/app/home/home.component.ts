import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']    
})
export class HomeComponent {
  giochi34 = [
    { slug: 'colori', titolo: 'Trova il colore', categoria: 'COLORI', emoji: '🎨', descrizione: 'Riconosci rosso, giallo, blu, verde e arancione.' },
    { slug: 'forme', titolo: 'Riconosci la forma', categoria: 'FORME', emoji: '🔷', descrizione: 'Gioca con cerchio, quadrato e triangolo.' },
    { slug: 'conta-fino-a-5', titolo: 'Conta fino a 5', categoria: 'NUMERI', emoji: '🔢', descrizione: 'Conta piccoli gruppi di oggetti da 1 a 5.' },
    { slug: 'emozioni', titolo: 'Che emozione è?', categoria: 'EMOZIONI', emoji: '😊', descrizione: 'Riconosci felicità, tristezza, rabbia e sorpresa.' },
    { slug: 'memory', titolo: 'Trova i due uguali', categoria: 'MEMORIA', emoji: '🧠', descrizione: 'Osserva e scegli la coppia identica.' },
    { slug: 'posizioni', titolo: 'Dove si trova?', categoria: 'SPAZIO', emoji: '📍', descrizione: 'Scopri sopra, sotto, dentro e fuori.' },
    { slug: 'ombre', titolo: 'Abbina l’ombra', categoria: 'PERCEZIONE', emoji: '🌑', descrizione: 'Riconosci un oggetto dalla sua sagoma.' },
    { slug: 'chi-manca', titolo: 'Chi manca?', categoria: 'MEMORIA', emoji: '❓', descrizione: 'Completa semplici gruppi e sequenze.' },
    { slug: 'uguale-diverso', titolo: 'Uguale o diverso?', categoria: 'LOGICA', emoji: '👀', descrizione: 'Confronta due immagini e trova la risposta.' },
    { slug: 'trova-coppia', titolo: 'Trova la coppia', categoria: 'ASSOCIAZIONI', emoji: '🧩', descrizione: 'Abbina oggetti che stanno bene insieme.' },
    { slug: 'grandezze', titolo: 'Piccolo o grande?', categoria: 'DIMENSIONI', emoji: '🐘', descrizione: 'Confronta oggetti e animali di diverse dimensioni.' },
    { slug: 'dove-vive', titolo: 'Dove vive?', categoria: 'ANIMALI', emoji: '🏡', descrizione: 'Abbina ogni animale al suo ambiente.' },
    { slug: 'cosa-mangia', titolo: 'Cosa mangia?', categoria: 'ANIMALI', emoji: '🥕', descrizione: 'Scopri il cibo adatto a diversi animali.' },
    { slug: 'giorno-notte', titolo: 'Giorno o notte?', categoria: 'TEMPO', emoji: '🌞', descrizione: 'Riconosci attività del giorno e della notte.' },
    { slug: 'caldo-freddo', titolo: 'Caldo o freddo?', categoria: 'AMBIENTE', emoji: '🌡️', descrizione: 'Distingui situazioni calde e fredde.' },
    { slug: 'vestiamo', titolo: 'Vestiamo il personaggio', categoria: 'AUTONOMIA', emoji: '👕', descrizione: 'Scegli i vestiti adatti al tempo.' },
    { slug: 'routine', titolo: 'La routine del mattino', categoria: 'AUTONOMIA', emoji: '⏰', descrizione: 'Riconosci le azioni della routine quotidiana.' },
    { slug: 'percorso', titolo: 'Segui il percorso', categoria: 'ORIENTAMENTO', emoji: '🧭', descrizione: 'Scegli la direzione giusta per arrivare alla meta.' },
    { slug: 'ascolta', titolo: 'Ascolta e riconosci', categoria: 'LINGUAGGIO', emoji: '🔊', descrizione: 'Ascolta la consegna e scegli l’immagine corretta.' },
    { slug: 'metti-a-posto', titolo: 'Metti a posto', categoria: 'AUTONOMIA', emoji: '🧺', descrizione: 'Scegli il posto corretto per gli oggetti.' }
  ];
}
