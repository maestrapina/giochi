import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Opzione {
  valore: string;
  label: string;
  emoji: string;
}

interface Domanda {
  consegna: string;
  visuale: string;
  dettaglio?: string;
  opzioni: Opzione[];
  corretta: string;
}

interface GiocoConfig {
  slug: string;
  titolo: string;
  categoria: string;
  emoji: string;
  intro: string;
  domande: Domanda[];
}

const o = (valore: string, label: string, emoji: string): Opzione => ({ valore, label, emoji });

const GIOCHI: GiocoConfig[] = [
  {
    "slug": "colori",
    "titolo": "Trova il colore",
    "categoria": "Colori",
    "emoji": "🎨",
    "intro": "Riconosci i colori più comuni.",
    "domande": [
      {
        "consegna": "Trova il colore rosso.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          }
        ],
        "corretta": "rosso"
      },
      {
        "consegna": "Trova il colore blu.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          },
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          }
        ],
        "corretta": "blu"
      },
      {
        "consegna": "Trova il colore giallo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          },
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          },
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          }
        ],
        "corretta": "giallo"
      },
      {
        "consegna": "Trova il colore verde.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          },
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          },
          {
            "valore": "marrone",
            "label": "MARRONE",
            "emoji": "🟤"
          }
        ],
        "corretta": "verde"
      },
      {
        "consegna": "Trova il colore arancione.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          },
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          },
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          }
        ],
        "corretta": "arancio"
      },
      {
        "consegna": "Trova il colore viola.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          },
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          }
        ],
        "corretta": "viola"
      },
      {
        "consegna": "Trova il colore nero.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          },
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          },
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          }
        ],
        "corretta": "nero"
      },
      {
        "consegna": "Trova il colore bianco.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          },
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          },
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          }
        ],
        "corretta": "bianco"
      },
      {
        "consegna": "Trova il colore marrone.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          },
          {
            "valore": "marrone",
            "label": "MARRONE",
            "emoji": "🟤"
          },
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          }
        ],
        "corretta": "marrone"
      },
      {
        "consegna": "Trova il colore rosa.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          },
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          }
        ],
        "corretta": "rosa"
      },
      {
        "consegna": "Trova il colore rosso.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          },
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          }
        ],
        "corretta": "rosso"
      },
      {
        "consegna": "Trova il colore blu.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          }
        ],
        "corretta": "blu"
      },
      {
        "consegna": "Trova il colore giallo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          },
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          },
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          }
        ],
        "corretta": "giallo"
      },
      {
        "consegna": "Trova il colore verde.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          },
          {
            "valore": "marrone",
            "label": "MARRONE",
            "emoji": "🟤"
          },
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          }
        ],
        "corretta": "verde"
      },
      {
        "consegna": "Trova il colore arancione.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          },
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          },
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          }
        ],
        "corretta": "arancio"
      },
      {
        "consegna": "Trova il colore viola.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          }
        ],
        "corretta": "viola"
      },
      {
        "consegna": "Trova il colore nero.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          },
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          },
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          }
        ],
        "corretta": "nero"
      },
      {
        "consegna": "Trova il colore bianco.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          },
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          },
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          }
        ],
        "corretta": "bianco"
      },
      {
        "consegna": "Trova il colore marrone.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "marrone",
            "label": "MARRONE",
            "emoji": "🟤"
          },
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          },
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          }
        ],
        "corretta": "marrone"
      },
      {
        "consegna": "Trova il colore rosa.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          }
        ],
        "corretta": "rosa"
      },
      {
        "consegna": "Trova il colore rosso.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          },
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          },
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          }
        ],
        "corretta": "rosso"
      },
      {
        "consegna": "Trova il colore blu.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          },
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          }
        ],
        "corretta": "blu"
      },
      {
        "consegna": "Trova il colore giallo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          },
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          },
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          }
        ],
        "corretta": "giallo"
      },
      {
        "consegna": "Trova il colore verde.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "marrone",
            "label": "MARRONE",
            "emoji": "🟤"
          },
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          },
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          }
        ],
        "corretta": "verde"
      },
      {
        "consegna": "Trova il colore arancione.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          },
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          },
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          }
        ],
        "corretta": "arancio"
      },
      {
        "consegna": "Trova il colore viola.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "giallo",
            "label": "GIALLO",
            "emoji": "🟡"
          },
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          }
        ],
        "corretta": "viola"
      },
      {
        "consegna": "Trova il colore nero.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "arancio",
            "label": "ARANCIONE",
            "emoji": "🟠"
          },
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          },
          {
            "valore": "verde",
            "label": "VERDE",
            "emoji": "🟢"
          }
        ],
        "corretta": "nero"
      },
      {
        "consegna": "Trova il colore bianco.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          },
          {
            "valore": "viola",
            "label": "VIOLA",
            "emoji": "🟣"
          },
          {
            "valore": "nero",
            "label": "NERO",
            "emoji": "⚫"
          }
        ],
        "corretta": "bianco"
      },
      {
        "consegna": "Trova il colore marrone.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "bianco",
            "label": "BIANCO",
            "emoji": "⚪"
          },
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          },
          {
            "valore": "marrone",
            "label": "MARRONE",
            "emoji": "🟤"
          }
        ],
        "corretta": "marrone"
      },
      {
        "consegna": "Trova il colore rosa.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "blu",
            "label": "BLU",
            "emoji": "🔵"
          },
          {
            "valore": "rosa",
            "label": "ROSA",
            "emoji": "🌸"
          },
          {
            "valore": "rosso",
            "label": "ROSSO",
            "emoji": "🔴"
          }
        ],
        "corretta": "rosa"
      }
    ]
  },
  {
    "slug": "forme",
    "titolo": "Riconosci la forma",
    "categoria": "Forme",
    "emoji": "🔷",
    "intro": "Riconosci forme semplici.",
    "domande": [
      {
        "consegna": "Tocca il cerchio.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "cerchio"
      },
      {
        "consegna": "Tocca il quadrato.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          }
        ],
        "corretta": "quadrato"
      },
      {
        "consegna": "Tocca il triangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "triangolo"
      },
      {
        "consegna": "Tocca il rettangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "rettangolo"
      },
      {
        "consegna": "Tocca il rombo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          }
        ],
        "corretta": "rombo"
      },
      {
        "consegna": "Tocca il stella.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          }
        ],
        "corretta": "stella"
      },
      {
        "consegna": "Tocca il cerchio.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "cerchio"
      },
      {
        "consegna": "Tocca il quadrato.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          }
        ],
        "corretta": "quadrato"
      },
      {
        "consegna": "Tocca il triangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "triangolo"
      },
      {
        "consegna": "Tocca il rettangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "rettangolo"
      },
      {
        "consegna": "Tocca il rombo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          }
        ],
        "corretta": "rombo"
      },
      {
        "consegna": "Tocca il stella.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          }
        ],
        "corretta": "stella"
      },
      {
        "consegna": "Tocca il cerchio.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "cerchio"
      },
      {
        "consegna": "Tocca il quadrato.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          }
        ],
        "corretta": "quadrato"
      },
      {
        "consegna": "Tocca il triangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "triangolo"
      },
      {
        "consegna": "Tocca il rettangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "rettangolo"
      },
      {
        "consegna": "Tocca il rombo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          }
        ],
        "corretta": "rombo"
      },
      {
        "consegna": "Tocca il stella.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          }
        ],
        "corretta": "stella"
      },
      {
        "consegna": "Tocca il cerchio.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "cerchio"
      },
      {
        "consegna": "Tocca il quadrato.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          }
        ],
        "corretta": "quadrato"
      },
      {
        "consegna": "Tocca il triangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "triangolo"
      },
      {
        "consegna": "Tocca il rettangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "rettangolo"
      },
      {
        "consegna": "Tocca il rombo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          }
        ],
        "corretta": "rombo"
      },
      {
        "consegna": "Tocca il stella.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          }
        ],
        "corretta": "stella"
      },
      {
        "consegna": "Tocca il cerchio.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "cerchio"
      },
      {
        "consegna": "Tocca il quadrato.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          }
        ],
        "corretta": "quadrato"
      },
      {
        "consegna": "Tocca il triangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "triangolo"
      },
      {
        "consegna": "Tocca il rettangolo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "triangolo",
            "label": "TRIANGOLO",
            "emoji": "🔺"
          }
        ],
        "corretta": "rettangolo"
      },
      {
        "consegna": "Tocca il rombo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "rettangolo",
            "label": "RETTANGOLO",
            "emoji": "▭"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "rombo",
            "label": "ROMBO",
            "emoji": "🔶"
          }
        ],
        "corretta": "rombo"
      },
      {
        "consegna": "Tocca il stella.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "quadrato",
            "label": "QUADRATO",
            "emoji": "🟦"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "cerchio",
            "label": "CERCHIO",
            "emoji": "⚪"
          }
        ],
        "corretta": "stella"
      }
    ]
  },
  {
    "slug": "conta-fino-a-5",
    "titolo": "Conta fino a 5",
    "categoria": "Numeri",
    "emoji": "🔢",
    "intro": "Conta piccoli gruppi di oggetti.",
    "domande": [
      {
        "consegna": "Quanti mele vedi?",
        "visuale": "🍎",
        "opzioni": [
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "1"
      },
      {
        "consegna": "Quanti pulcini vedi?",
        "visuale": "🐥 🐥",
        "opzioni": [
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          }
        ],
        "corretta": "2"
      },
      {
        "consegna": "Quanti stelle vedi?",
        "visuale": "⭐ ⭐ ⭐",
        "opzioni": [
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "3"
      },
      {
        "consegna": "Quanti palloncini vedi?",
        "visuale": "🎈 🎈 🎈 🎈",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          }
        ],
        "corretta": "4"
      },
      {
        "consegna": "Quanti orsetti vedi?",
        "visuale": "🧸 🧸 🧸 🧸 🧸",
        "opzioni": [
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          }
        ],
        "corretta": "5"
      },
      {
        "consegna": "Quanti pesci vedi?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          }
        ],
        "corretta": "1"
      },
      {
        "consegna": "Quanti fiori vedi?",
        "visuale": "🌸 🌸",
        "opzioni": [
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "2"
      },
      {
        "consegna": "Quanti macchine vedi?",
        "visuale": "🚗 🚗 🚗",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          }
        ],
        "corretta": "3"
      },
      {
        "consegna": "Quanti banane vedi?",
        "visuale": "🍌 🍌 🍌 🍌",
        "opzioni": [
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          }
        ],
        "corretta": "4"
      },
      {
        "consegna": "Quanti palle vedi?",
        "visuale": "⚽ ⚽ ⚽ ⚽ ⚽",
        "opzioni": [
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          }
        ],
        "corretta": "5"
      },
      {
        "consegna": "Quanti mele vedi?",
        "visuale": "🍎",
        "opzioni": [
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          }
        ],
        "corretta": "1"
      },
      {
        "consegna": "Quanti pulcini vedi?",
        "visuale": "🐥 🐥",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          }
        ],
        "corretta": "2"
      },
      {
        "consegna": "Quanti stelle vedi?",
        "visuale": "⭐ ⭐ ⭐",
        "opzioni": [
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          }
        ],
        "corretta": "3"
      },
      {
        "consegna": "Quanti palloncini vedi?",
        "visuale": "🎈 🎈 🎈 🎈",
        "opzioni": [
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "4"
      },
      {
        "consegna": "Quanti orsetti vedi?",
        "visuale": "🧸 🧸 🧸 🧸 🧸",
        "opzioni": [
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          }
        ],
        "corretta": "5"
      },
      {
        "consegna": "Quanti pesci vedi?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "1"
      },
      {
        "consegna": "Quanti fiori vedi?",
        "visuale": "🌸 🌸",
        "opzioni": [
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          }
        ],
        "corretta": "2"
      },
      {
        "consegna": "Quanti macchine vedi?",
        "visuale": "🚗 🚗 🚗",
        "opzioni": [
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "3"
      },
      {
        "consegna": "Quanti banane vedi?",
        "visuale": "🍌 🍌 🍌 🍌",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          }
        ],
        "corretta": "4"
      },
      {
        "consegna": "Quanti palle vedi?",
        "visuale": "⚽ ⚽ ⚽ ⚽ ⚽",
        "opzioni": [
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          }
        ],
        "corretta": "5"
      },
      {
        "consegna": "Quanti mele vedi?",
        "visuale": "🍎",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          }
        ],
        "corretta": "1"
      },
      {
        "consegna": "Quanti pulcini vedi?",
        "visuale": "🐥 🐥",
        "opzioni": [
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "2"
      },
      {
        "consegna": "Quanti stelle vedi?",
        "visuale": "⭐ ⭐ ⭐",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          }
        ],
        "corretta": "3"
      },
      {
        "consegna": "Quanti palloncini vedi?",
        "visuale": "🎈 🎈 🎈 🎈",
        "opzioni": [
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          }
        ],
        "corretta": "4"
      },
      {
        "consegna": "Quanti orsetti vedi?",
        "visuale": "🧸 🧸 🧸 🧸 🧸",
        "opzioni": [
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          }
        ],
        "corretta": "5"
      },
      {
        "consegna": "Quanti pesci vedi?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          }
        ],
        "corretta": "1"
      },
      {
        "consegna": "Quanti fiori vedi?",
        "visuale": "🌸 🌸",
        "opzioni": [
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          }
        ],
        "corretta": "2"
      },
      {
        "consegna": "Quanti macchine vedi?",
        "visuale": "🚗 🚗 🚗",
        "opzioni": [
          {
            "valore": "2",
            "label": "2",
            "emoji": "2️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          }
        ],
        "corretta": "3"
      },
      {
        "consegna": "Quanti banane vedi?",
        "visuale": "🍌 🍌 🍌 🍌",
        "opzioni": [
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          },
          {
            "valore": "3",
            "label": "3",
            "emoji": "3️⃣"
          }
        ],
        "corretta": "4"
      },
      {
        "consegna": "Quanti palle vedi?",
        "visuale": "⚽ ⚽ ⚽ ⚽ ⚽",
        "opzioni": [
          {
            "valore": "1",
            "label": "1",
            "emoji": "1️⃣"
          },
          {
            "valore": "4",
            "label": "4",
            "emoji": "4️⃣"
          },
          {
            "valore": "5",
            "label": "5",
            "emoji": "5️⃣"
          }
        ],
        "corretta": "5"
      }
    ]
  },
  {
    "slug": "emozioni",
    "titolo": "Che emozione è?",
    "categoria": "Emozioni",
    "emoji": "😊",
    "intro": "Riconosci alcune emozioni attraverso i volti.",
    "domande": [
      {
        "consegna": "Come si sente?",
        "visuale": "😊",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "felice"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😭",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          }
        ],
        "corretta": "triste"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😡",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          }
        ],
        "corretta": "arrabbiato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😲",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "sorpreso"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😱",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          }
        ],
        "corretta": "spaventato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          }
        ],
        "corretta": "stanco"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😁",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "felice"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😞",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          }
        ],
        "corretta": "triste"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🤬",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          }
        ],
        "corretta": "arrabbiato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😯",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "sorpreso"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😰",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          }
        ],
        "corretta": "spaventato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🥱",
        "opzioni": [
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          }
        ],
        "corretta": "stanco"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😃",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "felice"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "☹️",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          }
        ],
        "corretta": "triste"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😤",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          }
        ],
        "corretta": "arrabbiato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😮",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "sorpreso"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😨",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          }
        ],
        "corretta": "spaventato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😪",
        "opzioni": [
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          }
        ],
        "corretta": "stanco"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🙂",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "felice"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😔",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          }
        ],
        "corretta": "triste"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😠",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          }
        ],
        "corretta": "arrabbiato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🤯",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "sorpreso"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🙀",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          }
        ],
        "corretta": "spaventato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😫",
        "opzioni": [
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          }
        ],
        "corretta": "stanco"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🥰",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "felice"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😥",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          }
        ],
        "corretta": "triste"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "💢",
        "opzioni": [
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          }
        ],
        "corretta": "arrabbiato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😳",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "arrabbiato",
            "label": "ARRABBIATO",
            "emoji": "😠"
          }
        ],
        "corretta": "sorpreso"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "😧",
        "opzioni": [
          {
            "valore": "sorpreso",
            "label": "SORPRESO",
            "emoji": "😮"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "spaventato",
            "label": "SPAVENTATO",
            "emoji": "😨"
          }
        ],
        "corretta": "spaventato"
      },
      {
        "consegna": "Come si sente?",
        "visuale": "🫩",
        "opzioni": [
          {
            "valore": "triste",
            "label": "TRISTE",
            "emoji": "😢"
          },
          {
            "valore": "stanco",
            "label": "STANCO",
            "emoji": "🥱"
          },
          {
            "valore": "felice",
            "label": "FELICE",
            "emoji": "😄"
          }
        ],
        "corretta": "stanco"
      }
    ]
  },
  {
    "slug": "memory",
    "titolo": "Trova i due uguali",
    "categoria": "Memoria",
    "emoji": "🧠",
    "intro": "Osserva e scegli la coppia identica.",
    "domande": [
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🍎  🍎",
            "emoji": "🍎🍎"
          },
          {
            "valore": "d1",
            "label": "🍎  🧸",
            "emoji": "🍎🧸"
          },
          {
            "valore": "d2",
            "label": "🍎  🌞",
            "emoji": "🍎🌞"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🐶  ⚽",
            "emoji": "🐶⚽"
          },
          {
            "valore": "d2",
            "label": "🐶  🌙",
            "emoji": "🐶🌙"
          },
          {
            "valore": "same",
            "label": "🐶  🐶",
            "emoji": "🐶🐶"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🚗  🐰",
            "emoji": "🚗🐰"
          },
          {
            "valore": "same",
            "label": "🚗  🚗",
            "emoji": "🚗🚗"
          },
          {
            "valore": "d1",
            "label": "🚗  🐱",
            "emoji": "🚗🐱"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🌸  🌸",
            "emoji": "🌸🌸"
          },
          {
            "valore": "d1",
            "label": "🌸  🦋",
            "emoji": "🌸🦋"
          },
          {
            "valore": "d2",
            "label": "🌸  🍐",
            "emoji": "🌸🍐"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "⭐  🍓",
            "emoji": "⭐🍓"
          },
          {
            "valore": "d2",
            "label": "⭐  🚌",
            "emoji": "⭐🚌"
          },
          {
            "valore": "same",
            "label": "⭐  ⭐",
            "emoji": "⭐⭐"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🐟  🌻",
            "emoji": "🐟🌻"
          },
          {
            "valore": "same",
            "label": "🐟  🐟",
            "emoji": "🐟🐟"
          },
          {
            "valore": "d1",
            "label": "🐟  🚲",
            "emoji": "🐟🚲"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🍌  🍌",
            "emoji": "🍌🍌"
          },
          {
            "valore": "d1",
            "label": "🍌  🌞",
            "emoji": "🍌🌞"
          },
          {
            "valore": "d2",
            "label": "🍌  🐥",
            "emoji": "🍌🐥"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🧸  🌙",
            "emoji": "🧸🌙"
          },
          {
            "valore": "d2",
            "label": "🧸  🐮",
            "emoji": "🧸🐮"
          },
          {
            "valore": "same",
            "label": "🧸  🧸",
            "emoji": "🧸🧸"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "⚽  🍪",
            "emoji": "⚽🍪"
          },
          {
            "valore": "same",
            "label": "⚽  ⚽",
            "emoji": "⚽⚽"
          },
          {
            "valore": "d1",
            "label": "⚽  🐰",
            "emoji": "⚽🐰"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🐱  🐱",
            "emoji": "🐱🐱"
          },
          {
            "valore": "d1",
            "label": "🐱  🍐",
            "emoji": "🐱🍐"
          },
          {
            "valore": "d2",
            "label": "🐱  🎈",
            "emoji": "🐱🎈"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🦋  🚌",
            "emoji": "🦋🚌"
          },
          {
            "valore": "d2",
            "label": "🦋  🧩",
            "emoji": "🦋🧩"
          },
          {
            "valore": "same",
            "label": "🦋  🦋",
            "emoji": "🦋🦋"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🍓  🚂",
            "emoji": "🍓🚂"
          },
          {
            "valore": "same",
            "label": "🍓  🍓",
            "emoji": "🍓🍓"
          },
          {
            "valore": "d1",
            "label": "🍓  🌻",
            "emoji": "🍓🌻"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🚲  🚲",
            "emoji": "🚲🚲"
          },
          {
            "valore": "d1",
            "label": "🚲  🐥",
            "emoji": "🚲🐥"
          },
          {
            "valore": "d2",
            "label": "🚲  🐸",
            "emoji": "🚲🐸"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🌞  🐮",
            "emoji": "🌞🐮"
          },
          {
            "valore": "d2",
            "label": "🌞  🦁",
            "emoji": "🌞🦁"
          },
          {
            "valore": "same",
            "label": "🌞  🌞",
            "emoji": "🌞🌞"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🌙  🍉",
            "emoji": "🌙🍉"
          },
          {
            "valore": "same",
            "label": "🌙  🌙",
            "emoji": "🌙🌙"
          },
          {
            "valore": "d1",
            "label": "🌙  🍪",
            "emoji": "🌙🍪"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🐰  🐰",
            "emoji": "🐰🐰"
          },
          {
            "valore": "d1",
            "label": "🐰  🎈",
            "emoji": "🐰🎈"
          },
          {
            "valore": "d2",
            "label": "🐰  🛴",
            "emoji": "🐰🛴"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🍐  🧩",
            "emoji": "🍐🧩"
          },
          {
            "valore": "d2",
            "label": "🍐  🎁",
            "emoji": "🍐🎁"
          },
          {
            "valore": "same",
            "label": "🍐  🍐",
            "emoji": "🍐🍐"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🚌  🍎",
            "emoji": "🚌🍎"
          },
          {
            "valore": "same",
            "label": "🚌  🚌",
            "emoji": "🚌🚌"
          },
          {
            "valore": "d1",
            "label": "🚌  🚂",
            "emoji": "🚌🚂"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🌻  🌻",
            "emoji": "🌻🌻"
          },
          {
            "valore": "d1",
            "label": "🌻  🐸",
            "emoji": "🌻🐸"
          },
          {
            "valore": "d2",
            "label": "🌻  🐶",
            "emoji": "🌻🐶"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🐥  🦁",
            "emoji": "🐥🦁"
          },
          {
            "valore": "d2",
            "label": "🐥  🚗",
            "emoji": "🐥🚗"
          },
          {
            "valore": "same",
            "label": "🐥  🐥",
            "emoji": "🐥🐥"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🐮  🌸",
            "emoji": "🐮🌸"
          },
          {
            "valore": "same",
            "label": "🐮  🐮",
            "emoji": "🐮🐮"
          },
          {
            "valore": "d1",
            "label": "🐮  🍉",
            "emoji": "🐮🍉"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🍪  🍪",
            "emoji": "🍪🍪"
          },
          {
            "valore": "d1",
            "label": "🍪  🛴",
            "emoji": "🍪🛴"
          },
          {
            "valore": "d2",
            "label": "🍪  ⭐",
            "emoji": "🍪⭐"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🎈  🎁",
            "emoji": "🎈🎁"
          },
          {
            "valore": "d2",
            "label": "🎈  🐟",
            "emoji": "🎈🐟"
          },
          {
            "valore": "same",
            "label": "🎈  🎈",
            "emoji": "🎈🎈"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🧩  🍌",
            "emoji": "🧩🍌"
          },
          {
            "valore": "same",
            "label": "🧩  🧩",
            "emoji": "🧩🧩"
          },
          {
            "valore": "d1",
            "label": "🧩  🍎",
            "emoji": "🧩🍎"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🚂  🚂",
            "emoji": "🚂🚂"
          },
          {
            "valore": "d1",
            "label": "🚂  🐶",
            "emoji": "🚂🐶"
          },
          {
            "valore": "d2",
            "label": "🚂  🧸",
            "emoji": "🚂🧸"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🐸  🚗",
            "emoji": "🐸🚗"
          },
          {
            "valore": "d2",
            "label": "🐸  ⚽",
            "emoji": "🐸⚽"
          },
          {
            "valore": "same",
            "label": "🐸  🐸",
            "emoji": "🐸🐸"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🦁  🐱",
            "emoji": "🦁🐱"
          },
          {
            "valore": "same",
            "label": "🦁  🦁",
            "emoji": "🦁🦁"
          },
          {
            "valore": "d1",
            "label": "🦁  🌸",
            "emoji": "🦁🌸"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "same",
            "label": "🍉  🍉",
            "emoji": "🍉🍉"
          },
          {
            "valore": "d1",
            "label": "🍉  ⭐",
            "emoji": "🍉⭐"
          },
          {
            "valore": "d2",
            "label": "🍉  🦋",
            "emoji": "🍉🦋"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🛴  🐟",
            "emoji": "🛴🐟"
          },
          {
            "valore": "d2",
            "label": "🛴  🍓",
            "emoji": "🛴🍓"
          },
          {
            "valore": "same",
            "label": "🛴  🛴",
            "emoji": "🛴🛴"
          }
        ],
        "corretta": "same"
      },
      {
        "consegna": "Quale coppia è uguale?",
        "visuale": "👀",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🎁  🚲",
            "emoji": "🎁🚲"
          },
          {
            "valore": "same",
            "label": "🎁  🎁",
            "emoji": "🎁🎁"
          },
          {
            "valore": "d1",
            "label": "🎁  🍌",
            "emoji": "🎁🍌"
          }
        ],
        "corretta": "same"
      }
    ]
  },
  {
    "slug": "posizioni",
    "titolo": "Dove si trova?",
    "categoria": "Spazio",
    "emoji": "📍",
    "intro": "Sopra, sotto, dentro e fuori.",
    "domande": [
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🐱\n🪑",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "📦\n⚽",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🌿(🐦)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🧸     🛏️",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🍎\n🧺",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🚪\n🐶",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🏠(🚗)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🐟     🪸",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🎈\n🌳",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "📦\n👟",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🪑(🐱)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "⚽     📦",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🐦\n🌿",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🛏️\n🧸",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🧺(🍎)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🐶     🚪",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🚗\n🏠",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🪸\n🐟",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🌳(🎈)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "👟     📦",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🐱\n🪑",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "📦\n⚽",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🌿(🐦)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🧸     🛏️",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🍎\n🧺",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🚪\n🐶",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🏠(🚗)",
        "opzioni": [
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          },
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          }
        ],
        "corretta": "dentro"
      },
      {
        "consegna": "È dentro o fuori?",
        "visuale": "🐟     🪸",
        "opzioni": [
          {
            "valore": "fuori",
            "label": "FUORI",
            "emoji": "📤"
          },
          {
            "valore": "dentro",
            "label": "DENTRO",
            "emoji": "📥"
          }
        ],
        "corretta": "fuori"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "🎈\n🌳",
        "opzioni": [
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          },
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          }
        ],
        "corretta": "sopra"
      },
      {
        "consegna": "È sopra o sotto?",
        "visuale": "📦\n👟",
        "opzioni": [
          {
            "valore": "sotto",
            "label": "SOTTO",
            "emoji": "⬇️"
          },
          {
            "valore": "sopra",
            "label": "SOPRA",
            "emoji": "⬆️"
          }
        ],
        "corretta": "sotto"
      }
    ]
  },
  {
    "slug": "ombre",
    "titolo": "Abbina l’ombra",
    "categoria": "Percezione",
    "emoji": "🌑",
    "intro": "Riconosci un oggetto dalla sua sagoma.",
    "domande": [
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐘",
        "opzioni": [
          {
            "valore": "elefante",
            "label": "ELEFANTE",
            "emoji": "🐘"
          },
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          },
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          }
        ],
        "corretta": "elefante",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🚲",
        "opzioni": [
          {
            "valore": "aereo",
            "label": "AEREO",
            "emoji": "✈️"
          },
          {
            "valore": "ombrello",
            "label": "OMBRELLO",
            "emoji": "☂️"
          },
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          }
        ],
        "corretta": "bici",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🌳",
        "opzioni": [
          {
            "valore": "pesce",
            "label": "PESCE",
            "emoji": "🐟"
          },
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "gatto",
            "label": "GATTO",
            "emoji": "🐱"
          }
        ],
        "corretta": "albero",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "✈️",
        "opzioni": [
          {
            "valore": "aereo",
            "label": "AEREO",
            "emoji": "✈️"
          },
          {
            "valore": "auto",
            "label": "AUTO",
            "emoji": "🚗"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌸"
          }
        ],
        "corretta": "aereo",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "☂️",
        "opzioni": [
          {
            "valore": "barca",
            "label": "BARCA",
            "emoji": "⛵"
          },
          {
            "valore": "cane",
            "label": "CANE",
            "emoji": "🐶"
          },
          {
            "valore": "ombrello",
            "label": "OMBRELLO",
            "emoji": "☂️"
          }
        ],
        "corretta": "ombrello",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐱",
        "opzioni": [
          {
            "valore": "treno",
            "label": "TRENO",
            "emoji": "🚆"
          },
          {
            "valore": "gatto",
            "label": "GATTO",
            "emoji": "🐱"
          },
          {
            "valore": "coniglio",
            "label": "CONIGLIO",
            "emoji": "🐰"
          }
        ],
        "corretta": "gatto",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "pesce",
            "label": "PESCE",
            "emoji": "🐟"
          },
          {
            "valore": "sole",
            "label": "SOLE",
            "emoji": "☀️"
          },
          {
            "valore": "luna",
            "label": "LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "pesce",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🚗",
        "opzioni": [
          {
            "valore": "farfalla",
            "label": "FARFALLA",
            "emoji": "🦋"
          },
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          },
          {
            "valore": "auto",
            "label": "AUTO",
            "emoji": "🚗"
          }
        ],
        "corretta": "auto",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🌸",
        "opzioni": [
          {
            "valore": "orsetto",
            "label": "ORSETTO",
            "emoji": "🧸"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌸"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "fiore",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "⛵",
        "opzioni": [
          {
            "valore": "barca",
            "label": "BARCA",
            "emoji": "⛵"
          },
          {
            "valore": "palla",
            "label": "PALLA",
            "emoji": "⚽"
          },
          {
            "valore": "cappello",
            "label": "CAPPELLO",
            "emoji": "🧢"
          }
        ],
        "corretta": "barca",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐶",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "casa",
            "label": "CASA",
            "emoji": "🏠"
          },
          {
            "valore": "cane",
            "label": "CANE",
            "emoji": "🐶"
          }
        ],
        "corretta": "cane",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐰",
        "opzioni": [
          {
            "valore": "mucca",
            "label": "MUCCA",
            "emoji": "🐮"
          },
          {
            "valore": "coniglio",
            "label": "CONIGLIO",
            "emoji": "🐰"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "coniglio",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🚆",
        "opzioni": [
          {
            "valore": "treno",
            "label": "TRENO",
            "emoji": "🚆"
          },
          {
            "valore": "pulcino",
            "label": "PULCINO",
            "emoji": "🐥"
          },
          {
            "valore": "rana",
            "label": "RANA",
            "emoji": "🐸"
          }
        ],
        "corretta": "treno",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "☀️",
        "opzioni": [
          {
            "valore": "leone",
            "label": "LEONE",
            "emoji": "🦁"
          },
          {
            "valore": "regalo",
            "label": "REGALO",
            "emoji": "🎁"
          },
          {
            "valore": "sole",
            "label": "SOLE",
            "emoji": "☀️"
          }
        ],
        "corretta": "sole",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "elefante",
            "label": "ELEFANTE",
            "emoji": "🐘"
          },
          {
            "valore": "luna",
            "label": "LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "fungo",
            "label": "FUNGO",
            "emoji": "🍄"
          }
        ],
        "corretta": "luna",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🦋",
        "opzioni": [
          {
            "valore": "farfalla",
            "label": "FARFALLA",
            "emoji": "🦋"
          },
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          },
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          }
        ],
        "corretta": "farfalla",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🍎",
        "opzioni": [
          {
            "valore": "aereo",
            "label": "AEREO",
            "emoji": "✈️"
          },
          {
            "valore": "ombrello",
            "label": "OMBRELLO",
            "emoji": "☂️"
          },
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          }
        ],
        "corretta": "mela",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🍌",
        "opzioni": [
          {
            "valore": "pesce",
            "label": "PESCE",
            "emoji": "🐟"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "gatto",
            "label": "GATTO",
            "emoji": "🐱"
          }
        ],
        "corretta": "banana",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🧸",
        "opzioni": [
          {
            "valore": "orsetto",
            "label": "ORSETTO",
            "emoji": "🧸"
          },
          {
            "valore": "auto",
            "label": "AUTO",
            "emoji": "🚗"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌸"
          }
        ],
        "corretta": "orsetto",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "⚽",
        "opzioni": [
          {
            "valore": "barca",
            "label": "BARCA",
            "emoji": "⛵"
          },
          {
            "valore": "cane",
            "label": "CANE",
            "emoji": "🐶"
          },
          {
            "valore": "palla",
            "label": "PALLA",
            "emoji": "⚽"
          }
        ],
        "corretta": "palla",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🧢",
        "opzioni": [
          {
            "valore": "treno",
            "label": "TRENO",
            "emoji": "🚆"
          },
          {
            "valore": "cappello",
            "label": "CAPPELLO",
            "emoji": "🧢"
          },
          {
            "valore": "coniglio",
            "label": "CONIGLIO",
            "emoji": "🐰"
          }
        ],
        "corretta": "cappello",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "👟",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "sole",
            "label": "SOLE",
            "emoji": "☀️"
          },
          {
            "valore": "luna",
            "label": "LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "scarpa",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🏠",
        "opzioni": [
          {
            "valore": "farfalla",
            "label": "FARFALLA",
            "emoji": "🦋"
          },
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          },
          {
            "valore": "casa",
            "label": "CASA",
            "emoji": "🏠"
          }
        ],
        "corretta": "casa",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "⭐",
        "opzioni": [
          {
            "valore": "orsetto",
            "label": "ORSETTO",
            "emoji": "🧸"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "stella",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐮",
        "opzioni": [
          {
            "valore": "mucca",
            "label": "MUCCA",
            "emoji": "🐮"
          },
          {
            "valore": "palla",
            "label": "PALLA",
            "emoji": "⚽"
          },
          {
            "valore": "cappello",
            "label": "CAPPELLO",
            "emoji": "🧢"
          }
        ],
        "corretta": "mucca",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐥",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "casa",
            "label": "CASA",
            "emoji": "🏠"
          },
          {
            "valore": "pulcino",
            "label": "PULCINO",
            "emoji": "🐥"
          }
        ],
        "corretta": "pulcino",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🐸",
        "opzioni": [
          {
            "valore": "mucca",
            "label": "MUCCA",
            "emoji": "🐮"
          },
          {
            "valore": "rana",
            "label": "RANA",
            "emoji": "🐸"
          },
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          }
        ],
        "corretta": "rana",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🦁",
        "opzioni": [
          {
            "valore": "leone",
            "label": "LEONE",
            "emoji": "🦁"
          },
          {
            "valore": "pulcino",
            "label": "PULCINO",
            "emoji": "🐥"
          },
          {
            "valore": "rana",
            "label": "RANA",
            "emoji": "🐸"
          }
        ],
        "corretta": "leone",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🎁",
        "opzioni": [
          {
            "valore": "leone",
            "label": "LEONE",
            "emoji": "🦁"
          },
          {
            "valore": "fungo",
            "label": "FUNGO",
            "emoji": "🍄"
          },
          {
            "valore": "regalo",
            "label": "REGALO",
            "emoji": "🎁"
          }
        ],
        "corretta": "regalo",
        "dettaglio": "Guarda bene la forma."
      },
      {
        "consegna": "Quale oggetto può avere questa ombra?",
        "visuale": "🍄",
        "opzioni": [
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          },
          {
            "valore": "fungo",
            "label": "FUNGO",
            "emoji": "🍄"
          },
          {
            "valore": "elefante",
            "label": "ELEFANTE",
            "emoji": "🐘"
          }
        ],
        "corretta": "fungo",
        "dettaglio": "Guarda bene la forma."
      }
    ]
  },
  {
    "slug": "chi-manca",
    "titolo": "Chi manca?",
    "categoria": "Memoria",
    "emoji": "❓",
    "intro": "Completa una piccola sequenza.",
    "domande": [
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐶  🐱  🐶  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🐱",
            "emoji": "🐱"
          },
          {
            "valore": "d1",
            "label": "🌸",
            "emoji": "🌸"
          },
          {
            "valore": "d2",
            "label": "🍓",
            "emoji": "🍓"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🍌  🍎  🍌  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "⭐",
            "emoji": "⭐"
          },
          {
            "valore": "d2",
            "label": "🚲",
            "emoji": "🚲"
          },
          {
            "valore": "c",
            "label": "🍎",
            "emoji": "🍎"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🚗  🚌  🚗  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🌞",
            "emoji": "🌞"
          },
          {
            "valore": "c",
            "label": "🚌",
            "emoji": "🚌"
          },
          {
            "valore": "d1",
            "label": "🐟",
            "emoji": "🐟"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐮  🐥  🐮  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🐥",
            "emoji": "🐥"
          },
          {
            "valore": "d1",
            "label": "🍌",
            "emoji": "🍌"
          },
          {
            "valore": "d2",
            "label": "🌙",
            "emoji": "🌙"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "☀️  ☁️  ☀️  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🧸",
            "emoji": "🧸"
          },
          {
            "valore": "d2",
            "label": "🐰",
            "emoji": "🐰"
          },
          {
            "valore": "c",
            "label": "☁️",
            "emoji": "☁️"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🌻  🌸  🌻  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🍐",
            "emoji": "🍐"
          },
          {
            "valore": "c",
            "label": "🌸",
            "emoji": "🌸"
          },
          {
            "valore": "d1",
            "label": "⚽",
            "emoji": "⚽"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "⚽  🏀  ⚽  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🏀",
            "emoji": "🏀"
          },
          {
            "valore": "d1",
            "label": "🐱",
            "emoji": "🐱"
          },
          {
            "valore": "d2",
            "label": "🚌",
            "emoji": "🚌"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐢  🐰  🐢  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🦋",
            "emoji": "🦋"
          },
          {
            "valore": "d2",
            "label": "🌻",
            "emoji": "🌻"
          },
          {
            "valore": "c",
            "label": "🐰",
            "emoji": "🐰"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🍐  🍓  🍐  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🐥",
            "emoji": "🐥"
          },
          {
            "valore": "c",
            "label": "🍓",
            "emoji": "🍓"
          },
          {
            "valore": "d1",
            "label": "🍓",
            "emoji": "🍓"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🛴  🚲  🛴  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🚲",
            "emoji": "🚲"
          },
          {
            "valore": "d1",
            "label": "🚲",
            "emoji": "🚲"
          },
          {
            "valore": "d2",
            "label": "🐮",
            "emoji": "🐮"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐶  🐱  🐶  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🌞",
            "emoji": "🌞"
          },
          {
            "valore": "d2",
            "label": "🍪",
            "emoji": "🍪"
          },
          {
            "valore": "c",
            "label": "🐱",
            "emoji": "🐱"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🍌  🍎  🍌  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🎈",
            "emoji": "🎈"
          },
          {
            "valore": "c",
            "label": "🍎",
            "emoji": "🍎"
          },
          {
            "valore": "d1",
            "label": "🌙",
            "emoji": "🌙"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🚗  🚌  🚗  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🚌",
            "emoji": "🚌"
          },
          {
            "valore": "d1",
            "label": "🐰",
            "emoji": "🐰"
          },
          {
            "valore": "d2",
            "label": "🧩",
            "emoji": "🧩"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐮  🐥  🐮  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🍐",
            "emoji": "🍐"
          },
          {
            "valore": "d2",
            "label": "🚂",
            "emoji": "🚂"
          },
          {
            "valore": "c",
            "label": "🐥",
            "emoji": "🐥"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "☀️  ☁️  ☀️  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🐸",
            "emoji": "🐸"
          },
          {
            "valore": "c",
            "label": "☁️",
            "emoji": "☁️"
          },
          {
            "valore": "d1",
            "label": "🚌",
            "emoji": "🚌"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🌻  🌸  🌻  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🌸",
            "emoji": "🌸"
          },
          {
            "valore": "d1",
            "label": "🌻",
            "emoji": "🌻"
          },
          {
            "valore": "d2",
            "label": "🦁",
            "emoji": "🦁"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "⚽  🏀  ⚽  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🐥",
            "emoji": "🐥"
          },
          {
            "valore": "d2",
            "label": "🍉",
            "emoji": "🍉"
          },
          {
            "valore": "c",
            "label": "🏀",
            "emoji": "🏀"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐢  🐰  🐢  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🛴",
            "emoji": "🛴"
          },
          {
            "valore": "c",
            "label": "🐰",
            "emoji": "🐰"
          },
          {
            "valore": "d1",
            "label": "🐮",
            "emoji": "🐮"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🍐  🍓  🍐  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🍓",
            "emoji": "🍓"
          },
          {
            "valore": "d1",
            "label": "🍪",
            "emoji": "🍪"
          },
          {
            "valore": "d2",
            "label": "🎁",
            "emoji": "🎁"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🛴  🚲  🛴  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🎈",
            "emoji": "🎈"
          },
          {
            "valore": "d2",
            "label": "🍎",
            "emoji": "🍎"
          },
          {
            "valore": "c",
            "label": "🚲",
            "emoji": "🚲"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐶  🐱  🐶  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🐶",
            "emoji": "🐶"
          },
          {
            "valore": "c",
            "label": "🐱",
            "emoji": "🐱"
          },
          {
            "valore": "d1",
            "label": "🧩",
            "emoji": "🧩"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🍌  🍎  🍌  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🍎",
            "emoji": "🍎"
          },
          {
            "valore": "d1",
            "label": "🚂",
            "emoji": "🚂"
          },
          {
            "valore": "d2",
            "label": "🚗",
            "emoji": "🚗"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🚗  🚌  🚗  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🐸",
            "emoji": "🐸"
          },
          {
            "valore": "d2",
            "label": "🌸",
            "emoji": "🌸"
          },
          {
            "valore": "c",
            "label": "🚌",
            "emoji": "🚌"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐮  🐥  🐮  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "⭐",
            "emoji": "⭐"
          },
          {
            "valore": "c",
            "label": "🐥",
            "emoji": "🐥"
          },
          {
            "valore": "d1",
            "label": "🦁",
            "emoji": "🦁"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "☀️  ☁️  ☀️  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "☁️",
            "emoji": "☁️"
          },
          {
            "valore": "d1",
            "label": "🍉",
            "emoji": "🍉"
          },
          {
            "valore": "d2",
            "label": "🐟",
            "emoji": "🐟"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🌻  🌸  🌻  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🛴",
            "emoji": "🛴"
          },
          {
            "valore": "d2",
            "label": "🍌",
            "emoji": "🍌"
          },
          {
            "valore": "c",
            "label": "🌸",
            "emoji": "🌸"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "⚽  🏀  ⚽  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🧸",
            "emoji": "🧸"
          },
          {
            "valore": "c",
            "label": "🏀",
            "emoji": "🏀"
          },
          {
            "valore": "d1",
            "label": "🎁",
            "emoji": "🎁"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🐢  🐰  🐢  ❓",
        "opzioni": [
          {
            "valore": "c",
            "label": "🐰",
            "emoji": "🐰"
          },
          {
            "valore": "d1",
            "label": "🍎",
            "emoji": "🍎"
          },
          {
            "valore": "d2",
            "label": "⚽",
            "emoji": "⚽"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🍐  🍓  🍐  ❓",
        "opzioni": [
          {
            "valore": "d1",
            "label": "🐶",
            "emoji": "🐶"
          },
          {
            "valore": "d2",
            "label": "🐱",
            "emoji": "🐱"
          },
          {
            "valore": "c",
            "label": "🍓",
            "emoji": "🍓"
          }
        ],
        "corretta": "c"
      },
      {
        "consegna": "Chi manca nella sequenza?",
        "visuale": "🛴  🚲  🛴  ❓",
        "opzioni": [
          {
            "valore": "d2",
            "label": "🦋",
            "emoji": "🦋"
          },
          {
            "valore": "c",
            "label": "🚲",
            "emoji": "🚲"
          },
          {
            "valore": "d1",
            "label": "🚗",
            "emoji": "🚗"
          }
        ],
        "corretta": "c"
      }
    ]
  },
  {
    "slug": "uguale-diverso",
    "titolo": "Uguale o diverso?",
    "categoria": "Logica",
    "emoji": "👀",
    "intro": "Confronta due immagini.",
    "domande": [
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🍎   🍎",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐶   🦋",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🚗   🚗",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🌸   🚲",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "⭐   ⭐",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐟   🌙",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🍌   🍌",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🧸   🍐",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "⚽   ⚽",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐱   🌻",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🦋   🦋",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🍓   🐮",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🚲   🚲",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🌞   🎈",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🌙   🌙",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐰   🚂",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🍐   🍐",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🚌   🦁",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🌻   🌻",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐥   🛴",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐮   🐮",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🍪   🍎",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🎈   🎈",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🧩   🚗",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🚂   🚂",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🐸   ⭐",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🦁   🦁",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🍉   🍌",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🛴   🛴",
        "opzioni": [
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          },
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          }
        ],
        "corretta": "uguali"
      },
      {
        "consegna": "Sono uguali o diversi?",
        "visuale": "🎁   ⚽",
        "opzioni": [
          {
            "valore": "diversi",
            "label": "DIVERSI",
            "emoji": "↔️"
          },
          {
            "valore": "uguali",
            "label": "UGUALI",
            "emoji": "✅"
          }
        ],
        "corretta": "diversi"
      }
    ]
  },
  {
    "slug": "trova-coppia",
    "titolo": "Trova la coppia",
    "categoria": "Associazioni",
    "emoji": "🧩",
    "intro": "Abbina due cose che stanno bene insieme.",
    "domande": [
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🌧️",
        "opzioni": [
          {
            "valore": "ombrello",
            "label": "OMBRELLO",
            "emoji": "☂️"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "ombrello"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🦶",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "scarpa",
            "label": "SCARPA",
            "emoji": "👟"
          }
        ],
        "corretta": "scarpa"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🌸",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "ape",
            "label": "APE",
            "emoji": "🐝"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          }
        ],
        "corretta": "ape"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🦷",
        "opzioni": [
          {
            "valore": "spazzolino",
            "label": "SPAZZOLINO",
            "emoji": "🪥"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          }
        ],
        "corretta": "spazzolino"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🔒",
        "opzioni": [
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          },
          {
            "valore": "forchetta",
            "label": "FORCHETTA",
            "emoji": "🍴"
          },
          {
            "valore": "chiave",
            "label": "CHIAVE",
            "emoji": "🔑"
          }
        ],
        "corretta": "chiave"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🍝",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "forchetta",
            "label": "FORCHETTA",
            "emoji": "🍴"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "forchetta"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "✏️",
        "opzioni": [
          {
            "valore": "foglio",
            "label": "FOGLIO",
            "emoji": "📄"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "foglio"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "☀️",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "occhiali",
            "label": "OCCHIALI",
            "emoji": "🕶️"
          }
        ],
        "corretta": "occhiali"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "⚽",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "porta",
            "label": "PORTA",
            "emoji": "🥅"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          }
        ],
        "corretta": "porta"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🛏️",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛌"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          }
        ],
        "corretta": "cuscino"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🚗",
        "opzioni": [
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          },
          {
            "valore": "forchetta",
            "label": "FORCHETTA",
            "emoji": "🍴"
          },
          {
            "valore": "ruota",
            "label": "RUOTA",
            "emoji": "🛞"
          }
        ],
        "corretta": "ruota"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🐶",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "cuccia",
            "label": "CUCCIA",
            "emoji": "🏠"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "cuccia"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "📚",
        "opzioni": [
          {
            "valore": "scuola",
            "label": "SCUOLA",
            "emoji": "🏫"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "scuola"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🍲",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "cucchiaio",
            "label": "CUCCHIAIO",
            "emoji": "🥄"
          }
        ],
        "corretta": "cucchiaio"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🎨",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "pennello",
            "label": "PENNELLO",
            "emoji": "🖌️"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          }
        ],
        "corretta": "pennello"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🧼",
        "opzioni": [
          {
            "valore": "acqua",
            "label": "ACQUA",
            "emoji": "💧"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          }
        ],
        "corretta": "acqua"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🪴",
        "opzioni": [
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          },
          {
            "valore": "forchetta",
            "label": "FORCHETTA",
            "emoji": "🍴"
          },
          {
            "valore": "annaffiatoio",
            "label": "ANNAFFIATOIO",
            "emoji": "🚿"
          }
        ],
        "corretta": "annaffiatoio"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🕯️",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "fiamma",
            "label": "FIAMMA",
            "emoji": "🔥"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "fiamma"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "📺",
        "opzioni": [
          {
            "valore": "telecomando",
            "label": "TELECOMANDO",
            "emoji": "🎛️"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "telecomando"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🧦",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "piede",
            "label": "PIEDE",
            "emoji": "🦶"
          }
        ],
        "corretta": "piede"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🧤",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "mano",
            "label": "MANO",
            "emoji": "✋"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          }
        ],
        "corretta": "mano"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🪥",
        "opzioni": [
          {
            "valore": "dentifricio",
            "label": "DENTIFRICIO",
            "emoji": "🧴"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          }
        ],
        "corretta": "dentifricio"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🍞",
        "opzioni": [
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          },
          {
            "valore": "forchetta",
            "label": "FORCHETTA",
            "emoji": "🍴"
          },
          {
            "valore": "marmellata",
            "label": "MARMELLATA",
            "emoji": "🍓"
          }
        ],
        "corretta": "marmellata"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🎂",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "candela",
            "label": "CANDELA",
            "emoji": "🕯️"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "candela"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🚲",
        "opzioni": [
          {
            "valore": "casco",
            "label": "CASCO",
            "emoji": "⛑️"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "casco"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "📝",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "penna",
            "label": "PENNA",
            "emoji": "🖊️"
          }
        ],
        "corretta": "penna"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🪴",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌷"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          }
        ],
        "corretta": "fiore"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "acqua",
            "label": "ACQUA",
            "emoji": "💧"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          }
        ],
        "corretta": "acqua"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "🚂",
        "opzioni": [
          {
            "valore": "lampadina",
            "label": "LAMPADINA",
            "emoji": "💡"
          },
          {
            "valore": "forchetta",
            "label": "FORCHETTA",
            "emoji": "🍴"
          },
          {
            "valore": "binari",
            "label": "BINARI",
            "emoji": "🛤️"
          }
        ],
        "corretta": "binari"
      },
      {
        "consegna": "Cosa sta bene insieme?",
        "visuale": "📸",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "foto",
            "label": "FOTO",
            "emoji": "🖼️"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          }
        ],
        "corretta": "foto"
      }
    ]
  },
  {
    "slug": "grandezze",
    "titolo": "Piccolo, medio, grande",
    "categoria": "Dimensioni",
    "emoji": "📏",
    "intro": "Riconosci e confronta le dimensioni.",
    "domande": [
      {
        "consegna": "Qual è piccolo?",
        "visuale": "⚽",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "⚽"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "⚽"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "⚽"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🍎 🍎",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🍎"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🍎"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🍎"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🌸 🌸 🌸",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🌸"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🌸"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🌸"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "⭐",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "⭐"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "⭐"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "⭐"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "❤️ ❤️",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "❤️"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "❤️"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "❤️"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🐟 🐟 🐟",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🐟"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🐟"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🐟"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🚗",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🚗"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🚗"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🚗"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🧸 🧸",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🧸"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🧸"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🧸"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🐱 🐱 🐱",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🐱"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🐱"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🐱"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🏠",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🏠"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🏠"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🏠"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "⚽ ⚽",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "⚽"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "⚽"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "⚽"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🍎 🍎 🍎",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🍎"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🍎"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🍎"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🌸",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🌸"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🌸"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🌸"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "⭐ ⭐",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "⭐"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "⭐"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "⭐"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "❤️ ❤️ ❤️",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "❤️"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "❤️"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "❤️"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🐟"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🐟"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🐟"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🚗 🚗",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🚗"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🚗"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🚗"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🧸 🧸 🧸",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🧸"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🧸"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🧸"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🐱",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🐱"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🐱"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🐱"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🏠 🏠",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🏠"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🏠"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🏠"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "⚽ ⚽ ⚽",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "⚽"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "⚽"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "⚽"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🍎",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🍎"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🍎"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🍎"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🌸 🌸",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🌸"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🌸"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🌸"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "⭐ ⭐ ⭐",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "⭐"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "⭐"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "⭐"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "❤️",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "❤️"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "❤️"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "❤️"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🐟 🐟",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🐟"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🐟"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🐟"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🚗 🚗 🚗",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🚗"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🚗"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🚗"
          }
        ],
        "corretta": "grande"
      },
      {
        "consegna": "Qual è piccolo?",
        "visuale": "🧸",
        "opzioni": [
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🧸"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🧸"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🧸"
          }
        ],
        "corretta": "piccolo"
      },
      {
        "consegna": "Qual è medio?",
        "visuale": "🐱 🐱",
        "opzioni": [
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🐱"
          },
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🐱"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🐱"
          }
        ],
        "corretta": "medio"
      },
      {
        "consegna": "Qual è grande?",
        "visuale": "🏠 🏠 🏠",
        "opzioni": [
          {
            "valore": "grande",
            "label": "GRANDE",
            "emoji": "🏠"
          },
          {
            "valore": "piccolo",
            "label": "PICCOLO",
            "emoji": "🏠"
          },
          {
            "valore": "medio",
            "label": "MEDIO",
            "emoji": "🏠"
          }
        ],
        "corretta": "grande"
      }
    ]
  },
  {
    "slug": "dove-vive",
    "titolo": "Dove vive?",
    "categoria": "Animali",
    "emoji": "🏡",
    "intro": "Associa gli animali al loro ambiente.",
    "domande": [
      {
        "consegna": "Dove vive?",
        "visuale": "🐟",
        "opzioni": [
          {
            "valore": "mare",
            "label": "MARE",
            "emoji": "🌊"
          },
          {
            "valore": "frigo",
            "label": "NEL FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "mare"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐮",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "armadio",
            "label": "NELL’ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "fattoria",
            "label": "FATTORIA",
            "emoji": "🚜"
          }
        ],
        "corretta": "fattoria"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐦",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "nido",
            "label": "NIDO",
            "emoji": "🪺"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          }
        ],
        "corretta": "nido"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐝",
        "opzioni": [
          {
            "valore": "alveare",
            "label": "ALVEARE",
            "emoji": "🍯"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "alveare"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦁",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "frigo",
            "label": "NEL FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "savana",
            "label": "SAVANA",
            "emoji": "🌾"
          }
        ],
        "corretta": "savana"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐧",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "ghiaccio",
            "label": "GHIACCIO",
            "emoji": "🧊"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          }
        ],
        "corretta": "ghiaccio"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐸",
        "opzioni": [
          {
            "valore": "stagno",
            "label": "STAGNO",
            "emoji": "💧"
          },
          {
            "valore": "letto",
            "label": "NEL LETTO",
            "emoji": "🛏️"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          }
        ],
        "corretta": "stagno"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐿️",
        "opzioni": [
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "bosco",
            "label": "BOSCO",
            "emoji": "🌳"
          }
        ],
        "corretta": "bosco"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐔",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "pollaio",
            "label": "POLLAIO",
            "emoji": "🏡"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "pollaio"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐶",
        "opzioni": [
          {
            "valore": "cuccia",
            "label": "CUCCIA",
            "emoji": "🏠"
          },
          {
            "valore": "armadio",
            "label": "NELL’ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          }
        ],
        "corretta": "cuccia"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐱",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "letto",
            "label": "NEL LETTO",
            "emoji": "🛏️"
          },
          {
            "valore": "casa",
            "label": "CASA",
            "emoji": "🏠"
          }
        ],
        "corretta": "casa"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐰",
        "opzioni": [
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "tana",
            "label": "TANA",
            "emoji": "🕳️"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "tana"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦆",
        "opzioni": [
          {
            "valore": "lago",
            "label": "LAGO",
            "emoji": "🌊"
          },
          {
            "valore": "frigo",
            "label": "NEL FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "lago"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦀",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "armadio",
            "label": "NELL’ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "spiaggia",
            "label": "SPIAGGIA",
            "emoji": "🏖️"
          }
        ],
        "corretta": "spiaggia"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐴",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "stalla",
            "label": "STALLA",
            "emoji": "🏚️"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          }
        ],
        "corretta": "stalla"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐑",
        "opzioni": [
          {
            "valore": "prato",
            "label": "PRATO",
            "emoji": "🌿"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "prato"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦋",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "frigo",
            "label": "NEL FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "giardino",
            "label": "GIARDINO",
            "emoji": "🌷"
          }
        ],
        "corretta": "giardino"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐒",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "foresta",
            "label": "FORESTA",
            "emoji": "🌴"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          }
        ],
        "corretta": "foresta"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐻",
        "opzioni": [
          {
            "valore": "bosco",
            "label": "BOSCO",
            "emoji": "🌳"
          },
          {
            "valore": "letto",
            "label": "NEL LETTO",
            "emoji": "🛏️"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          }
        ],
        "corretta": "bosco"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐬",
        "opzioni": [
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "mare",
            "label": "MARE",
            "emoji": "🌊"
          }
        ],
        "corretta": "mare"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐢",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "stagno",
            "label": "STAGNO",
            "emoji": "💧"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "stagno"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦉",
        "opzioni": [
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "armadio",
            "label": "NELL’ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          }
        ],
        "corretta": "albero"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐘",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "letto",
            "label": "NEL LETTO",
            "emoji": "🛏️"
          },
          {
            "valore": "savana",
            "label": "SAVANA",
            "emoji": "🌾"
          }
        ],
        "corretta": "savana"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦒",
        "opzioni": [
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "savana",
            "label": "SAVANA",
            "emoji": "🌾"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "savana"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐐",
        "opzioni": [
          {
            "valore": "montagna",
            "label": "MONTAGNA",
            "emoji": "⛰️"
          },
          {
            "valore": "frigo",
            "label": "NEL FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "montagna"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐳",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "armadio",
            "label": "NELL’ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "oceano",
            "label": "OCEANO",
            "emoji": "🌊"
          }
        ],
        "corretta": "oceano"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦜",
        "opzioni": [
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "foresta",
            "label": "FORESTA",
            "emoji": "🌴"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          }
        ],
        "corretta": "foresta"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐺",
        "opzioni": [
          {
            "valore": "bosco",
            "label": "BOSCO",
            "emoji": "🌳"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "bosco"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🦭",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "frigo",
            "label": "NEL FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "ghiaccio",
            "label": "GHIACCIO",
            "emoji": "🧊"
          }
        ],
        "corretta": "ghiaccio"
      },
      {
        "consegna": "Dove vive?",
        "visuale": "🐞",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "giardino",
            "label": "GIARDINO",
            "emoji": "🌷"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          }
        ],
        "corretta": "giardino"
      }
    ]
  },
  {
    "slug": "cosa-mangia",
    "titolo": "Cosa mangia?",
    "categoria": "Animali",
    "emoji": "🥕",
    "intro": "Abbina gli animali al loro cibo.",
    "domande": [
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐰",
        "opzioni": [
          {
            "valore": "carota",
            "label": "CAROTA",
            "emoji": "🥕"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "carota"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐮",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "erba",
            "label": "ERBA",
            "emoji": "🌿"
          }
        ],
        "corretta": "erba"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐵",
        "opzioni": [
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          }
        ],
        "corretta": "banana"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐼",
        "opzioni": [
          {
            "valore": "bambu",
            "label": "BAMBÙ",
            "emoji": "🎋"
          },
          {
            "valore": "chiave",
            "label": "CHIAVE",
            "emoji": "🔑"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          }
        ],
        "corretta": "bambu"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐿️",
        "opzioni": [
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          },
          {
            "valore": "ghianda",
            "label": "GHIANDA",
            "emoji": "🌰"
          }
        ],
        "corretta": "ghianda"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐶",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "crocchette",
            "label": "CROCCHETTE",
            "emoji": "🥣"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          }
        ],
        "corretta": "crocchette"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐱",
        "opzioni": [
          {
            "valore": "pesce",
            "label": "PESCE",
            "emoji": "🐟"
          },
          {
            "valore": "sapone",
            "label": "SAPONE",
            "emoji": "🧼"
          },
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          }
        ],
        "corretta": "pesce"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐔",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "chiave",
            "label": "CHIAVE",
            "emoji": "🔑"
          },
          {
            "valore": "semi",
            "label": "SEMI",
            "emoji": "🌾"
          }
        ],
        "corretta": "semi"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐴",
        "opzioni": [
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "fieno",
            "label": "FIENO",
            "emoji": "🌾"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "fieno"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐑",
        "opzioni": [
          {
            "valore": "erba",
            "label": "ERBA",
            "emoji": "🌿"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          }
        ],
        "corretta": "erba"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐘",
        "opzioni": [
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "sapone",
            "label": "SAPONE",
            "emoji": "🧼"
          },
          {
            "valore": "foglie",
            "label": "FOGLIE",
            "emoji": "🍃"
          }
        ],
        "corretta": "foglie"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦒",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "foglie",
            "label": "FOGLIE",
            "emoji": "🍃"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          }
        ],
        "corretta": "foglie"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐝",
        "opzioni": [
          {
            "valore": "nettare",
            "label": "NETTARE",
            "emoji": "🌸"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "nettare"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐧",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "pesce",
            "label": "PESCE",
            "emoji": "🐟"
          }
        ],
        "corretta": "pesce"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦁",
        "opzioni": [
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "carne",
            "label": "CARNE",
            "emoji": "🥩"
          },
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          }
        ],
        "corretta": "carne"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐸",
        "opzioni": [
          {
            "valore": "insetti",
            "label": "INSETTI",
            "emoji": "🪰"
          },
          {
            "valore": "chiave",
            "label": "CHIAVE",
            "emoji": "🔑"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          }
        ],
        "corretta": "insetti"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐢",
        "opzioni": [
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          },
          {
            "valore": "verdura",
            "label": "VERDURA",
            "emoji": "🥬"
          }
        ],
        "corretta": "verdura"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦆",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "semi",
            "label": "SEMI",
            "emoji": "🌾"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          }
        ],
        "corretta": "semi"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐐",
        "opzioni": [
          {
            "valore": "erba",
            "label": "ERBA",
            "emoji": "🌿"
          },
          {
            "valore": "sapone",
            "label": "SAPONE",
            "emoji": "🧼"
          },
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          }
        ],
        "corretta": "erba"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦋",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "chiave",
            "label": "CHIAVE",
            "emoji": "🔑"
          },
          {
            "valore": "nettare",
            "label": "NETTARE",
            "emoji": "🌸"
          }
        ],
        "corretta": "nettare"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐻",
        "opzioni": [
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "miele",
            "label": "MIELE",
            "emoji": "🍯"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "miele"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐬",
        "opzioni": [
          {
            "valore": "pesce",
            "label": "PESCE",
            "emoji": "🐟"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          }
        ],
        "corretta": "pesce"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐺",
        "opzioni": [
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "sapone",
            "label": "SAPONE",
            "emoji": "🧼"
          },
          {
            "valore": "carne",
            "label": "CARNE",
            "emoji": "🥩"
          }
        ],
        "corretta": "carne"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐹",
        "opzioni": [
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          },
          {
            "valore": "semi",
            "label": "SEMI",
            "emoji": "🌾"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          }
        ],
        "corretta": "semi"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦜",
        "opzioni": [
          {
            "valore": "frutta",
            "label": "FRUTTA",
            "emoji": "🍎"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          },
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "frutta"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐞",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "matita",
            "label": "MATITA",
            "emoji": "✏️"
          },
          {
            "valore": "afidi",
            "label": "INSETTI",
            "emoji": "🪲"
          }
        ],
        "corretta": "afidi"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦔",
        "opzioni": [
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          },
          {
            "valore": "insetti",
            "label": "INSETTI",
            "emoji": "🪰"
          },
          {
            "valore": "sedia",
            "label": "SEDIA",
            "emoji": "🪑"
          }
        ],
        "corretta": "insetti"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🦀",
        "opzioni": [
          {
            "valore": "alghe",
            "label": "ALGHE",
            "emoji": "🌿"
          },
          {
            "valore": "chiave",
            "label": "CHIAVE",
            "emoji": "🔑"
          },
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          }
        ],
        "corretta": "alghe"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐳",
        "opzioni": [
          {
            "valore": "martello",
            "label": "MARTELLO",
            "emoji": "🔨"
          },
          {
            "valore": "calzino",
            "label": "CALZINO",
            "emoji": "🧦"
          },
          {
            "valore": "plancton",
            "label": "PLANCTON",
            "emoji": "🫧"
          }
        ],
        "corretta": "plancton"
      },
      {
        "consegna": "Cosa può mangiare?",
        "visuale": "🐓",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "semi",
            "label": "SEMI",
            "emoji": "🌾"
          },
          {
            "valore": "pallone",
            "label": "PALLONE",
            "emoji": "⚽"
          }
        ],
        "corretta": "semi"
      }
    ]
  },
  {
    "slug": "giorno-notte",
    "titolo": "Giorno o notte?",
    "categoria": "Tempo",
    "emoji": "🌞",
    "intro": "Riconosci momenti e attività del giorno.",
    "domande": [
      {
        "consegna": "È giorno o notte? Vediamo il sole alto nel cielo.",
        "visuale": "☀️",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Dormiamo nel letto.",
        "visuale": "🛏️",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Vediamo tante stelle.",
        "visuale": "⭐ 🌙 ⭐",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Facciamo colazione.",
        "visuale": "🥛 🍞",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Mettiamo il pigiama per dormire.",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Andiamo a scuola.",
        "visuale": "🏫",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Giochiamo al parco con il sole.",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Vediamo la luna nel cielo.",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Pranziamo.",
        "visuale": "🍝",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Sentiamo il gufo.",
        "visuale": "🦉",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Vediamo il sole alto nel cielo.",
        "visuale": "☀️",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Dormiamo nel letto.",
        "visuale": "🛏️",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Vediamo tante stelle.",
        "visuale": "⭐ 🌙 ⭐",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Facciamo colazione.",
        "visuale": "🥛 🍞",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Mettiamo il pigiama per dormire.",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Andiamo a scuola.",
        "visuale": "🏫",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Giochiamo al parco con il sole.",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Vediamo la luna nel cielo.",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Pranziamo.",
        "visuale": "🍝",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Sentiamo il gufo.",
        "visuale": "🦉",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Vediamo il sole alto nel cielo.",
        "visuale": "☀️",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Dormiamo nel letto.",
        "visuale": "🛏️",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Vediamo tante stelle.",
        "visuale": "⭐ 🌙 ⭐",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Facciamo colazione.",
        "visuale": "🥛 🍞",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Mettiamo il pigiama per dormire.",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Andiamo a scuola.",
        "visuale": "🏫",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Giochiamo al parco con il sole.",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Vediamo la luna nel cielo.",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      },
      {
        "consegna": "È giorno o notte? Pranziamo.",
        "visuale": "🍝",
        "opzioni": [
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          },
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          }
        ],
        "corretta": "giorno"
      },
      {
        "consegna": "È giorno o notte? Sentiamo il gufo.",
        "visuale": "🦉",
        "opzioni": [
          {
            "valore": "notte",
            "label": "NOTTE",
            "emoji": "🌙"
          },
          {
            "valore": "giorno",
            "label": "GIORNO",
            "emoji": "🌞"
          }
        ],
        "corretta": "notte"
      }
    ]
  },
  {
    "slug": "caldo-freddo",
    "titolo": "Caldo o freddo?",
    "categoria": "Ambiente",
    "emoji": "🌡️",
    "intro": "Riconosci situazioni calde e fredde.",
    "domande": [
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🍦",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🔥",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "⛄",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "☕",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🧊",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🍲",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "❄️",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🧣",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🏖️",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🍦",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🔥",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "⛄",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "☕",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🧊",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🍲",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "❄️",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🧣",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🏖️",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🍦",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🔥",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "⛄",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "☕",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🧊",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🍲",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "❄️",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🧣",
        "opzioni": [
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          },
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          }
        ],
        "corretta": "freddo"
      },
      {
        "consegna": "È caldo o freddo?",
        "visuale": "🏖️",
        "opzioni": [
          {
            "valore": "freddo",
            "label": "FREDDO",
            "emoji": "🧣"
          },
          {
            "valore": "caldo",
            "label": "CALDO",
            "emoji": "🌞"
          }
        ],
        "corretta": "caldo"
      }
    ]
  },
  {
      "slug": "vestiamo",
      "titolo": "Vestiamo il personaggio",
      "categoria": "Autonomia",
      "emoji": "👕",
      "intro": "Scegli i vestiti adatti alla situazione.",
      "domande": [
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌧️",
              "opzioni": [
                  {
                      "valore": "impermeabile",
                      "label": "IMPERMEABILE",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "sandali",
                      "label": "SANDALI",
                      "emoji": "👡"
                  }
              ],
              "corretta": "impermeabile"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "❄️",
              "opzioni": [
                  {
                      "valore": "cappotto",
                      "label": "CAPPOTTO",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "cappotto"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🏖️",
              "opzioni": [
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "cappotto",
                      "label": "CAPPOTTO",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "sciarpa",
                      "label": "SCIARPA",
                      "emoji": "🧣"
                  }
              ],
              "corretta": "costume"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "☀️",
              "opzioni": [
                  {
                      "valore": "maglietta",
                      "label": "MAGLIETTA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "cappotto",
                      "label": "CAPPOTTO",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "guanti",
                      "label": "GUANTI",
                      "emoji": "🧤"
                  }
              ],
              "corretta": "maglietta"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🥶",
              "opzioni": [
                  {
                      "valore": "sciarpa",
                      "label": "SCIARPA",
                      "emoji": "🧣"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "sciarpa"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌧️💦",
              "opzioni": [
                  {
                      "valore": "stivali-pioggia",
                      "label": "STIVALI DA PIOGGIA",
                      "emoji": "👢"
                  },
                  {
                      "valore": "sandali",
                      "label": "SANDALI",
                      "emoji": "👡"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "stivali-pioggia"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🛏️",
              "opzioni": [
                  {
                      "valore": "pigiama",
                      "label": "PIGIAMA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "impermeabile",
                      "label": "IMPERMEABILE",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "pigiama"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "⚽",
              "opzioni": [
                  {
                      "valore": "scarpe-ginnastica",
                      "label": "SCARPE DA GINNASTICA",
                      "emoji": "👟"
                  },
                  {
                      "valore": "tacchi",
                      "label": "TACCHI",
                      "emoji": "👠"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "scarpe-ginnastica"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🏊",
              "opzioni": [
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "cappotto",
                      "label": "CAPPOTTO",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "sciarpa",
                      "label": "SCIARPA",
                      "emoji": "🧣"
                  }
              ],
              "corretta": "costume"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌞",
              "opzioni": [
                  {
                      "valore": "cappellino",
                      "label": "CAPPELLINO",
                      "emoji": "🧢"
                  },
                  {
                      "valore": "berretto-lana",
                      "label": "BERRETTO DI LANA",
                      "emoji": "🧶"
                  },
                  {
                      "valore": "guanti",
                      "label": "GUANTI",
                      "emoji": "🧤"
                  }
              ],
              "corretta": "cappellino"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "👐❄️",
              "opzioni": [
                  {
                      "valore": "guanti",
                      "label": "GUANTI",
                      "emoji": "🧤"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "sandali",
                      "label": "SANDALI",
                      "emoji": "👡"
                  }
              ],
              "corretta": "guanti"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🧒❄️",
              "opzioni": [
                  {
                      "valore": "berretto-lana",
                      "label": "BERRETTO DI LANA",
                      "emoji": "🧶"
                  },
                  {
                      "valore": "cappello-sole",
                      "label": "CAPPELLO DA SOLE",
                      "emoji": "👒"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "berretto-lana"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🏝️",
              "opzioni": [
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  },
                  {
                      "valore": "scarponi",
                      "label": "SCARPONI",
                      "emoji": "🥾"
                  },
                  {
                      "valore": "stivali-pioggia",
                      "label": "STIVALI DA PIOGGIA",
                      "emoji": "👢"
                  }
              ],
              "corretta": "infradito"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌻",
              "opzioni": [
                  {
                      "valore": "pantaloncini",
                      "label": "PANTALONCINI",
                      "emoji": "🩳"
                  },
                  {
                      "valore": "cappotto",
                      "label": "CAPPOTTO",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "pantaloni-pesanti",
                      "label": "PANTALONI PESANTI",
                      "emoji": "👖"
                  }
              ],
              "corretta": "pantaloncini"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "⛄",
              "opzioni": [
                  {
                      "valore": "pantaloni-lunghi",
                      "label": "PANTALONI LUNGHI",
                      "emoji": "👖"
                  },
                  {
                      "valore": "pantaloncini",
                      "label": "PANTALONCINI",
                      "emoji": "🩳"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "pantaloni-lunghi"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🎉",
              "opzioni": [
                  {
                      "valore": "vestito-elegante",
                      "label": "VESTITO ELEGANTE",
                      "emoji": "👗"
                  },
                  {
                      "valore": "pigiama",
                      "label": "PIGIAMA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "vestito-elegante"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🚲",
              "opzioni": [
                  {
                      "valore": "scarpe-ginnastica",
                      "label": "SCARPE DA GINNASTICA",
                      "emoji": "👟"
                  },
                  {
                      "valore": "tacchi",
                      "label": "TACCHI",
                      "emoji": "👠"
                  },
                  {
                      "valore": "ciabatte",
                      "label": "CIABATTE",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "scarpe-ginnastica"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌧️🌧️",
              "opzioni": [
                  {
                      "valore": "giacca-impermeabile",
                      "label": "GIACCA IMPERMEABILE",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "canottiera",
                      "label": "CANOTTIERA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "giacca-impermeabile"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "☀️🏖️",
              "opzioni": [
                  {
                      "valore": "cappello-sole",
                      "label": "CAPPELLO DA SOLE",
                      "emoji": "👒"
                  },
                  {
                      "valore": "berretto-lana",
                      "label": "BERRETTO DI LANA",
                      "emoji": "🧶"
                  },
                  {
                      "valore": "sciarpa",
                      "label": "SCIARPA",
                      "emoji": "🧣"
                  }
              ],
              "corretta": "cappello-sole"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "❄️👣",
              "opzioni": [
                  {
                      "valore": "scarponi",
                      "label": "SCARPONI",
                      "emoji": "🥾"
                  },
                  {
                      "valore": "sandali",
                      "label": "SANDALI",
                      "emoji": "👡"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "scarponi"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🧊",
              "opzioni": [
                  {
                      "valore": "giubbotto-pesante",
                      "label": "GIUBBOTTO PESANTE",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "canottiera",
                      "label": "CANOTTIERA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "giubbotto-pesante"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🔥",
              "opzioni": [
                  {
                      "valore": "canottiera",
                      "label": "CANOTTIERA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "giubbotto-pesante",
                      "label": "GIUBBOTTO PESANTE",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "sciarpa",
                      "label": "SCIARPA",
                      "emoji": "🧣"
                  }
              ],
              "corretta": "canottiera"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌬️❄️",
              "opzioni": [
                  {
                      "valore": "giacca",
                      "label": "GIACCA",
                      "emoji": "🧥"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "giacca"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🏃",
              "opzioni": [
                  {
                      "valore": "scarpe-sportive",
                      "label": "SCARPE SPORTIVE",
                      "emoji": "👟"
                  },
                  {
                      "valore": "tacchi",
                      "label": "TACCHI",
                      "emoji": "👠"
                  },
                  {
                      "valore": "ciabatte",
                      "label": "CIABATTE",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "scarpe-sportive"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "☔",
              "opzioni": [
                  {
                      "valore": "stivali",
                      "label": "STIVALI",
                      "emoji": "👢"
                  },
                  {
                      "valore": "sandali",
                      "label": "SANDALI",
                      "emoji": "👡"
                  },
                  {
                      "valore": "infradito",
                      "label": "INFRADITO",
                      "emoji": "🩴"
                  }
              ],
              "corretta": "stivali"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌊",
              "opzioni": [
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  },
                  {
                      "valore": "jeans",
                      "label": "JEANS",
                      "emoji": "👖"
                  },
                  {
                      "valore": "cappotto",
                      "label": "CAPPOTTO",
                      "emoji": "🧥"
                  }
              ],
              "corretta": "costume"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🧣❄️",
              "opzioni": [
                  {
                      "valore": "sciarpa",
                      "label": "SCIARPA",
                      "emoji": "🧣"
                  },
                  {
                      "valore": "cravatta",
                      "label": "CRAVATTA",
                      "emoji": "👔"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "sciarpa"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌬️👂",
              "opzioni": [
                  {
                      "valore": "paraorecchie",
                      "label": "PARAORECCHIE",
                      "emoji": "🎧"
                  },
                  {
                      "valore": "cappello-sole",
                      "label": "CAPPELLO DA SOLE",
                      "emoji": "👒"
                  },
                  {
                      "valore": "visiera",
                      "label": "VISIERA",
                      "emoji": "🧢"
                  }
              ],
              "corretta": "paraorecchie"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🎂",
              "opzioni": [
                  {
                      "valore": "camicia",
                      "label": "CAMICIA",
                      "emoji": "👔"
                  },
                  {
                      "valore": "pigiama",
                      "label": "PIGIAMA",
                      "emoji": "👕"
                  },
                  {
                      "valore": "costume",
                      "label": "COSTUME",
                      "emoji": "🩱"
                  }
              ],
              "corretta": "camicia"
          },
          {
              "consegna": "Cosa è adatto indossare?",
              "visuale": "🌧️🌱",
              "opzioni": [
                  {
                      "valore": "stivali-pioggia",
                      "label": "STIVALI DA PIOGGIA",
                      "emoji": "👢"
                  },
                  {
                      "valore": "ciabatte",
                      "label": "CIABATTE",
                      "emoji": "🩴"
                  },
                  {
                      "valore": "sandali",
                      "label": "SANDALI",
                      "emoji": "👡"
                  }
              ],
              "corretta": "stivali-pioggia"
          }
      ]
  },
  {
    "slug": "routine",
    "titolo": "La routine del giorno",
    "categoria": "Autonomia",
    "emoji": "⏰",
    "intro": "Riconosci semplici azioni quotidiane.",
    "domande": [
      {
        "consegna": "Cosa facciamo quando suona la sveglia?",
        "visuale": "⏰",
        "opzioni": [
          {
            "valore": "alzarsi",
            "label": "CI ALZIAMO",
            "emoji": "🛏️"
          },
          {
            "valore": "scarpe-testa",
            "label": "METTIAMO LE SCARPE IN TESTA",
            "emoji": "👟"
          },
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "alzarsi"
      },
      {
        "consegna": "Cosa usiamo per lavarci i denti?",
        "visuale": "🦷",
        "opzioni": [
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          },
          {
            "valore": "banana-porta",
            "label": "BUSSIAMO CON UNA BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "spazzolino",
            "label": "SPAZZOLINO",
            "emoji": "🪥"
          }
        ],
        "corretta": "spazzolino"
      },
      {
        "consegna": "Cosa facciamo prima di uscire?",
        "visuale": "🚪",
        "opzioni": [
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          },
          {
            "valore": "vestirsi",
            "label": "CI VESTIAMO",
            "emoji": "👕"
          },
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          }
        ],
        "corretta": "vestirsi"
      },
      {
        "consegna": "Cosa facciamo al mattino per mangiare?",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "colazione",
            "label": "COLAZIONE",
            "emoji": "🥛"
          },
          {
            "valore": "pallone-letto",
            "label": "METTIAMO IL PALLONE A LETTO",
            "emoji": "⚽"
          },
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "colazione"
      },
      {
        "consegna": "Cosa mettiamo sulle spalle per andare a scuola?",
        "visuale": "🏫",
        "opzioni": [
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "scarpe-testa",
            "label": "METTIAMO LE SCARPE IN TESTA",
            "emoji": "👟"
          },
          {
            "valore": "zaino",
            "label": "ZAINO",
            "emoji": "🎒"
          }
        ],
        "corretta": "zaino"
      },
      {
        "consegna": "Cosa facciamo prima di mangiare?",
        "visuale": "👐",
        "opzioni": [
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          },
          {
            "valore": "mani",
            "label": "LAVIAMO LE MANI",
            "emoji": "🧼"
          },
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          }
        ],
        "corretta": "mani"
      },
      {
        "consegna": "Dopo aver mangiato, cosa possiamo fare?",
        "visuale": "🍽️",
        "opzioni": [
          {
            "valore": "riordinare",
            "label": "RIORDINIAMO",
            "emoji": "🧺"
          },
          {
            "valore": "pentola-testa",
            "label": "METTIAMO UNA PENTOLA IN TESTA",
            "emoji": "🍲"
          },
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          }
        ],
        "corretta": "riordinare"
      },
      {
        "consegna": "Cosa facciamo per lavarci?",
        "visuale": "🛁",
        "opzioni": [
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          },
          {
            "valore": "pallone-letto",
            "label": "METTIAMO IL PALLONE A LETTO",
            "emoji": "⚽"
          },
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Cosa mettiamo prima di dormire?",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "pigiama",
            "label": "PIGIAMA",
            "emoji": "👕"
          },
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "pigiama"
      },
      {
        "consegna": "Cosa facciamo di notte?",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "dormire",
            "label": "DORMIAMO",
            "emoji": "🛏️"
          },
          {
            "valore": "banana-porta",
            "label": "BUSSIAMO CON UNA BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          }
        ],
        "corretta": "dormire"
      },
      {
        "consegna": "Cosa facciamo quando suona la sveglia?",
        "visuale": "⏰",
        "opzioni": [
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          },
          {
            "valore": "pentola-testa",
            "label": "METTIAMO UNA PENTOLA IN TESTA",
            "emoji": "🍲"
          },
          {
            "valore": "alzarsi",
            "label": "CI ALZIAMO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "alzarsi"
      },
      {
        "consegna": "Cosa usiamo per lavarci i denti?",
        "visuale": "🦷",
        "opzioni": [
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          },
          {
            "valore": "spazzolino",
            "label": "SPAZZOLINO",
            "emoji": "🪥"
          },
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "spazzolino"
      },
      {
        "consegna": "Cosa facciamo prima di uscire?",
        "visuale": "🚪",
        "opzioni": [
          {
            "valore": "vestirsi",
            "label": "CI VESTIAMO",
            "emoji": "👕"
          },
          {
            "valore": "scarpe-testa",
            "label": "METTIAMO LE SCARPE IN TESTA",
            "emoji": "👟"
          },
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "vestirsi"
      },
      {
        "consegna": "Cosa facciamo al mattino per mangiare?",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          },
          {
            "valore": "banana-porta",
            "label": "BUSSIAMO CON UNA BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "colazione",
            "label": "COLAZIONE",
            "emoji": "🥛"
          }
        ],
        "corretta": "colazione"
      },
      {
        "consegna": "Cosa mettiamo sulle spalle per andare a scuola?",
        "visuale": "🏫",
        "opzioni": [
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          },
          {
            "valore": "zaino",
            "label": "ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          }
        ],
        "corretta": "zaino"
      },
      {
        "consegna": "Cosa facciamo prima di mangiare?",
        "visuale": "👐",
        "opzioni": [
          {
            "valore": "mani",
            "label": "LAVIAMO LE MANI",
            "emoji": "🧼"
          },
          {
            "valore": "pallone-letto",
            "label": "METTIAMO IL PALLONE A LETTO",
            "emoji": "⚽"
          },
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "mani"
      },
      {
        "consegna": "Dopo aver mangiato, cosa possiamo fare?",
        "visuale": "🍽️",
        "opzioni": [
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "scarpe-testa",
            "label": "METTIAMO LE SCARPE IN TESTA",
            "emoji": "👟"
          },
          {
            "valore": "riordinare",
            "label": "RIORDINIAMO",
            "emoji": "🧺"
          }
        ],
        "corretta": "riordinare"
      },
      {
        "consegna": "Cosa facciamo per lavarci?",
        "visuale": "🛁",
        "opzioni": [
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          },
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          },
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Cosa mettiamo prima di dormire?",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "pigiama",
            "label": "PIGIAMA",
            "emoji": "👕"
          },
          {
            "valore": "pentola-testa",
            "label": "METTIAMO UNA PENTOLA IN TESTA",
            "emoji": "🍲"
          },
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          }
        ],
        "corretta": "pigiama"
      },
      {
        "consegna": "Cosa facciamo di notte?",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          },
          {
            "valore": "pallone-letto",
            "label": "METTIAMO IL PALLONE A LETTO",
            "emoji": "⚽"
          },
          {
            "valore": "dormire",
            "label": "DORMIAMO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "dormire"
      },
      {
        "consegna": "Cosa facciamo quando suona la sveglia?",
        "visuale": "⏰",
        "opzioni": [
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "alzarsi",
            "label": "CI ALZIAMO",
            "emoji": "🛏️"
          },
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "alzarsi"
      },
      {
        "consegna": "Cosa usiamo per lavarci i denti?",
        "visuale": "🦷",
        "opzioni": [
          {
            "valore": "spazzolino",
            "label": "SPAZZOLINO",
            "emoji": "🪥"
          },
          {
            "valore": "banana-porta",
            "label": "BUSSIAMO CON UNA BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          }
        ],
        "corretta": "spazzolino"
      },
      {
        "consegna": "Cosa facciamo prima di uscire?",
        "visuale": "🚪",
        "opzioni": [
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          },
          {
            "valore": "pentola-testa",
            "label": "METTIAMO UNA PENTOLA IN TESTA",
            "emoji": "🍲"
          },
          {
            "valore": "vestirsi",
            "label": "CI VESTIAMO",
            "emoji": "👕"
          }
        ],
        "corretta": "vestirsi"
      },
      {
        "consegna": "Cosa facciamo al mattino per mangiare?",
        "visuale": "🌞",
        "opzioni": [
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          },
          {
            "valore": "colazione",
            "label": "COLAZIONE",
            "emoji": "🥛"
          },
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "colazione"
      },
      {
        "consegna": "Cosa mettiamo sulle spalle per andare a scuola?",
        "visuale": "🏫",
        "opzioni": [
          {
            "valore": "zaino",
            "label": "ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "scarpe-testa",
            "label": "METTIAMO LE SCARPE IN TESTA",
            "emoji": "👟"
          },
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "zaino"
      },
      {
        "consegna": "Cosa facciamo prima di mangiare?",
        "visuale": "👐",
        "opzioni": [
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          },
          {
            "valore": "banana-porta",
            "label": "BUSSIAMO CON UNA BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "mani",
            "label": "LAVIAMO LE MANI",
            "emoji": "🧼"
          }
        ],
        "corretta": "mani"
      },
      {
        "consegna": "Dopo aver mangiato, cosa possiamo fare?",
        "visuale": "🍽️",
        "opzioni": [
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          },
          {
            "valore": "riordinare",
            "label": "RIORDINIAMO",
            "emoji": "🧺"
          },
          {
            "valore": "libro-acqua",
            "label": "METTIAMO IL LIBRO NELL’ACQUA",
            "emoji": "📘"
          }
        ],
        "corretta": "riordinare"
      },
      {
        "consegna": "Cosa facciamo per lavarci?",
        "visuale": "🛁",
        "opzioni": [
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          },
          {
            "valore": "pallone-letto",
            "label": "METTIAMO IL PALLONE A LETTO",
            "emoji": "⚽"
          },
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Cosa mettiamo prima di dormire?",
        "visuale": "🌙",
        "opzioni": [
          {
            "valore": "luna",
            "label": "VOLIAMO SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "scarpe-testa",
            "label": "METTIAMO LE SCARPE IN TESTA",
            "emoji": "👟"
          },
          {
            "valore": "pigiama",
            "label": "PIGIAMA",
            "emoji": "👕"
          }
        ],
        "corretta": "pigiama"
      },
      {
        "consegna": "Cosa facciamo di notte?",
        "visuale": "😴",
        "opzioni": [
          {
            "valore": "cuscino-frigo",
            "label": "METTIAMO IL CUSCINO IN FRIGO",
            "emoji": "🛏️"
          },
          {
            "valore": "dormire",
            "label": "DORMIAMO",
            "emoji": "🛏️"
          },
          {
            "valore": "nuoto-soffitto",
            "label": "NUOTIAMO SUL SOFFITTO",
            "emoji": "🏊"
          }
        ],
        "corretta": "dormire"
      }
    ]
  },
  {
    "slug": "percorso",
    "titolo": "Segui il percorso",
    "categoria": "Orientamento",
    "emoji": "🧭",
    "intro": "Scegli la direzione giusta.",
    "domande": [
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐰                 🥕",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🧶                 🐱",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🪺\n\n🐦",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "⚽\n\n🧺",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🚗                 🏠",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🦴                 🐶",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🌸\n\n🐝",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🚂\n\n🏁",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐟                 🪸",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🌷                 🦋",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🥕\n\n🐰",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐱\n\n🧶",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐦                 🪺",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🧺                 ⚽",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🏠\n\n🚗",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐶\n\n🦴",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐝                 🌸",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🏁                 🚂",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🪸\n\n🐟",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🦋\n\n🌷",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐰                 🥕",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🧶                 🐱",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🪺\n\n🐦",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "⚽\n\n🧺",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🚗                 🏠",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🦴                 🐶",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🌸\n\n🐝",
        "opzioni": [
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          },
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          }
        ],
        "corretta": "su"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🚂\n\n🏁",
        "opzioni": [
          {
            "valore": "giu",
            "label": "GIÙ",
            "emoji": "⬇️"
          },
          {
            "valore": "su",
            "label": "SU",
            "emoji": "⬆️"
          }
        ],
        "corretta": "giu"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🐟                 🪸",
        "opzioni": [
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          },
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          }
        ],
        "corretta": "destra"
      },
      {
        "consegna": "Dove deve andare?",
        "visuale": "🌷                 🦋",
        "opzioni": [
          {
            "valore": "sinistra",
            "label": "SINISTRA",
            "emoji": "⬅️"
          },
          {
            "valore": "destra",
            "label": "DESTRA",
            "emoji": "➡️"
          }
        ],
        "corretta": "sinistra"
      }
    ]
  },
  {
    "slug": "ascolta",
    "titolo": "Ascolta e riconosci",
    "categoria": "Linguaggio",
    "emoji": "🔊",
    "intro": "Ascolta la consegna e scegli l’immagine giusta.",
    "domande": [
      {
        "consegna": "Tocca il cane.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cane",
            "label": "CANE",
            "emoji": "🐶"
          },
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          },
          {
            "valore": "auto",
            "label": "MACCHINA",
            "emoji": "🚗"
          }
        ],
        "corretta": "cane"
      },
      {
        "consegna": "Tocca la mela.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "sole",
            "label": "SOLE",
            "emoji": "☀️"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌸"
          },
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          }
        ],
        "corretta": "mela"
      },
      {
        "consegna": "Tocca la macchina.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "auto",
            "label": "MACCHINA",
            "emoji": "🚗"
          },
          {
            "valore": "gatto",
            "label": "GATTO",
            "emoji": "🐱"
          }
        ],
        "corretta": "auto"
      },
      {
        "consegna": "Tocca il sole.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "sole",
            "label": "SOLE",
            "emoji": "☀️"
          },
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          },
          {
            "valore": "luna",
            "label": "LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "sole"
      },
      {
        "consegna": "Tocca il fiore.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "mucca",
            "label": "MUCCA",
            "emoji": "🐮"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌸"
          }
        ],
        "corretta": "fiore"
      },
      {
        "consegna": "Tocca il gatto.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "treno",
            "label": "TRENO",
            "emoji": "🚆"
          },
          {
            "valore": "gatto",
            "label": "GATTO",
            "emoji": "🐱"
          },
          {
            "valore": "pera",
            "label": "PERA",
            "emoji": "🍐"
          }
        ],
        "corretta": "gatto"
      },
      {
        "consegna": "Tocca il banana.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "nuvola",
            "label": "NUVOLA",
            "emoji": "☁️"
          },
          {
            "valore": "fungo",
            "label": "FUNGO",
            "emoji": "🍄"
          }
        ],
        "corretta": "banana"
      },
      {
        "consegna": "Tocca il bici.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "coniglio",
            "label": "CONIGLIO",
            "emoji": "🐰"
          },
          {
            "valore": "fragola",
            "label": "FRAGOLA",
            "emoji": "🍓"
          },
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          }
        ],
        "corretta": "bici"
      },
      {
        "consegna": "Tocca la luna.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "luna",
            "label": "LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "bus",
            "label": "BUS",
            "emoji": "🚌"
          }
        ],
        "corretta": "luna"
      },
      {
        "consegna": "Tocca il albero.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "farfalla",
            "label": "FARFALLA",
            "emoji": "🦋"
          },
          {
            "valore": "pulcino",
            "label": "PULCINO",
            "emoji": "🐥"
          }
        ],
        "corretta": "albero"
      },
      {
        "consegna": "Tocca il mucca.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "anguria",
            "label": "ANGURIA",
            "emoji": "🍉"
          },
          {
            "valore": "aereo",
            "label": "AEREO",
            "emoji": "✈️"
          },
          {
            "valore": "mucca",
            "label": "MUCCA",
            "emoji": "🐮"
          }
        ],
        "corretta": "mucca"
      },
      {
        "consegna": "Tocca il pera.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "regalo",
            "label": "REGALO",
            "emoji": "🎁"
          },
          {
            "valore": "pera",
            "label": "PERA",
            "emoji": "🍐"
          },
          {
            "valore": "pioggia",
            "label": "PIOGGIA",
            "emoji": "🌧️"
          }
        ],
        "corretta": "pera"
      },
      {
        "consegna": "Tocca il treno.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "treno",
            "label": "TRENO",
            "emoji": "🚆"
          },
          {
            "valore": "leone",
            "label": "LEONE",
            "emoji": "🦁"
          },
          {
            "valore": "carota",
            "label": "CAROTA",
            "emoji": "🥕"
          }
        ],
        "corretta": "treno"
      },
      {
        "consegna": "Tocca la nuvola.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "barca",
            "label": "BARCA",
            "emoji": "⛵"
          },
          {
            "valore": "palla",
            "label": "PALLA",
            "emoji": "⚽"
          },
          {
            "valore": "nuvola",
            "label": "NUVOLA",
            "emoji": "☁️"
          }
        ],
        "corretta": "nuvola"
      },
      {
        "consegna": "Tocca il fungo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "cane",
            "label": "CANE",
            "emoji": "🐶"
          },
          {
            "valore": "fungo",
            "label": "FUNGO",
            "emoji": "🍄"
          },
          {
            "valore": "orsetto",
            "label": "ORSETTO",
            "emoji": "🧸"
          }
        ],
        "corretta": "fungo"
      },
      {
        "consegna": "Tocca il coniglio.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "coniglio",
            "label": "CONIGLIO",
            "emoji": "🐰"
          },
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          },
          {
            "valore": "auto",
            "label": "MACCHINA",
            "emoji": "🚗"
          }
        ],
        "corretta": "coniglio"
      },
      {
        "consegna": "Tocca la fragola.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "sole",
            "label": "SOLE",
            "emoji": "☀️"
          },
          {
            "valore": "fiore",
            "label": "FIORE",
            "emoji": "🌸"
          },
          {
            "valore": "fragola",
            "label": "FRAGOLA",
            "emoji": "🍓"
          }
        ],
        "corretta": "fragola"
      },
      {
        "consegna": "Tocca il bus.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "banana",
            "label": "BANANA",
            "emoji": "🍌"
          },
          {
            "valore": "bus",
            "label": "BUS",
            "emoji": "🚌"
          },
          {
            "valore": "gatto",
            "label": "GATTO",
            "emoji": "🐱"
          }
        ],
        "corretta": "bus"
      },
      {
        "consegna": "Tocca il stella.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "bici",
            "label": "BICI",
            "emoji": "🚲"
          },
          {
            "valore": "luna",
            "label": "LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "stella"
      },
      {
        "consegna": "Tocca la farfalla.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "albero",
            "label": "ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "mucca",
            "label": "MUCCA",
            "emoji": "🐮"
          },
          {
            "valore": "farfalla",
            "label": "FARFALLA",
            "emoji": "🦋"
          }
        ],
        "corretta": "farfalla"
      },
      {
        "consegna": "Tocca il pulcino.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "treno",
            "label": "TRENO",
            "emoji": "🚆"
          },
          {
            "valore": "pulcino",
            "label": "PULCINO",
            "emoji": "🐥"
          },
          {
            "valore": "pera",
            "label": "PERA",
            "emoji": "🍐"
          }
        ],
        "corretta": "pulcino"
      },
      {
        "consegna": "Tocca il anguria.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "anguria",
            "label": "ANGURIA",
            "emoji": "🍉"
          },
          {
            "valore": "nuvola",
            "label": "NUVOLA",
            "emoji": "☁️"
          },
          {
            "valore": "fungo",
            "label": "FUNGO",
            "emoji": "🍄"
          }
        ],
        "corretta": "anguria"
      },
      {
        "consegna": "Tocca il aereo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "coniglio",
            "label": "CONIGLIO",
            "emoji": "🐰"
          },
          {
            "valore": "fragola",
            "label": "FRAGOLA",
            "emoji": "🍓"
          },
          {
            "valore": "aereo",
            "label": "AEREO",
            "emoji": "✈️"
          }
        ],
        "corretta": "aereo"
      },
      {
        "consegna": "Tocca la pioggia.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "stella",
            "label": "STELLA",
            "emoji": "⭐"
          },
          {
            "valore": "pioggia",
            "label": "PIOGGIA",
            "emoji": "🌧️"
          },
          {
            "valore": "bus",
            "label": "BUS",
            "emoji": "🚌"
          }
        ],
        "corretta": "pioggia"
      },
      {
        "consegna": "Tocca il regalo.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "regalo",
            "label": "REGALO",
            "emoji": "🎁"
          },
          {
            "valore": "farfalla",
            "label": "FARFALLA",
            "emoji": "🦋"
          },
          {
            "valore": "pulcino",
            "label": "PULCINO",
            "emoji": "🐥"
          }
        ],
        "corretta": "regalo"
      },
      {
        "consegna": "Tocca il leone.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "anguria",
            "label": "ANGURIA",
            "emoji": "🍉"
          },
          {
            "valore": "aereo",
            "label": "AEREO",
            "emoji": "✈️"
          },
          {
            "valore": "leone",
            "label": "LEONE",
            "emoji": "🦁"
          }
        ],
        "corretta": "leone"
      },
      {
        "consegna": "Tocca la carota.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "regalo",
            "label": "REGALO",
            "emoji": "🎁"
          },
          {
            "valore": "carota",
            "label": "CAROTA",
            "emoji": "🥕"
          },
          {
            "valore": "pioggia",
            "label": "PIOGGIA",
            "emoji": "🌧️"
          }
        ],
        "corretta": "carota"
      },
      {
        "consegna": "Tocca la barca.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "barca",
            "label": "BARCA",
            "emoji": "⛵"
          },
          {
            "valore": "leone",
            "label": "LEONE",
            "emoji": "🦁"
          },
          {
            "valore": "carota",
            "label": "CAROTA",
            "emoji": "🥕"
          }
        ],
        "corretta": "barca"
      },
      {
        "consegna": "Tocca la palla.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "barca",
            "label": "BARCA",
            "emoji": "⛵"
          },
          {
            "valore": "orsetto",
            "label": "ORSETTO",
            "emoji": "🧸"
          },
          {
            "valore": "palla",
            "label": "PALLA",
            "emoji": "⚽"
          }
        ],
        "corretta": "palla"
      },
      {
        "consegna": "Tocca il orsetto.",
        "visuale": "👂",
        "opzioni": [
          {
            "valore": "mela",
            "label": "MELA",
            "emoji": "🍎"
          },
          {
            "valore": "orsetto",
            "label": "ORSETTO",
            "emoji": "🧸"
          },
          {
            "valore": "cane",
            "label": "CANE",
            "emoji": "🐶"
          }
        ],
        "corretta": "orsetto"
      }
    ]
  },
  {
    "slug": "metti-a-posto",
    "titolo": "Metti a posto",
    "categoria": "Autonomia",
    "emoji": "🧺",
    "intro": "Scegli il posto giusto per ogni oggetto.",
    "domande": [
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🪥",
        "opzioni": [
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          },
          {
            "valore": "albero",
            "label": "SULL’ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🛏️",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "camera",
            "label": "CAMERA",
            "emoji": "🏠"
          }
        ],
        "corretta": "camera"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🥛",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "frigo",
            "label": "FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "frigo"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "👟",
        "opzioni": [
          {
            "valore": "scarpiera",
            "label": "SCARPIERA",
            "emoji": "👞"
          },
          {
            "valore": "vaso",
            "label": "NEL VASO DEI FIORI",
            "emoji": "🌷"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "scarpiera"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧸",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "albero",
            "label": "SULL’ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "cesta",
            "label": "CESTA",
            "emoji": "🧺"
          }
        ],
        "corretta": "cesta"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🍽️",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "cucina",
            "label": "CUCINA",
            "emoji": "🍳"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          }
        ],
        "corretta": "cucina"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧥",
        "opzioni": [
          {
            "valore": "armadio",
            "label": "ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "armadio"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "📚",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "vaso",
            "label": "NEL VASO DEI FIORI",
            "emoji": "🌷"
          },
          {
            "valore": "libreria",
            "label": "LIBRERIA",
            "emoji": "📖"
          }
        ],
        "corretta": "libreria"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧼",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🍎",
        "opzioni": [
          {
            "valore": "frigo",
            "label": "FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          }
        ],
        "corretta": "frigo"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧦",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "cassetto",
            "label": "CASSETTO",
            "emoji": "🗄️"
          }
        ],
        "corretta": "cassetto"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🖍️",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "astuccio",
            "label": "ASTUCCIO",
            "emoji": "✏️"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "astuccio"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "⚽",
        "opzioni": [
          {
            "valore": "cesta",
            "label": "CESTA",
            "emoji": "🧺"
          },
          {
            "valore": "albero",
            "label": "SULL’ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "cesta"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🪮",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🍴",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "cucina",
            "label": "CUCINA",
            "emoji": "🍳"
          },
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "cucina"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "👕",
        "opzioni": [
          {
            "valore": "armadio",
            "label": "ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "vaso",
            "label": "NEL VASO DEI FIORI",
            "emoji": "🌷"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "armadio"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "📖",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "albero",
            "label": "SULL’ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "libreria",
            "label": "LIBRERIA",
            "emoji": "📖"
          }
        ],
        "corretta": "libreria"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧻",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🥕",
        "opzioni": [
          {
            "valore": "frigo",
            "label": "FRIGO",
            "emoji": "🧊"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "frigo"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🎲",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "vaso",
            "label": "NEL VASO DEI FIORI",
            "emoji": "🌷"
          },
          {
            "valore": "cesta",
            "label": "CESTA",
            "emoji": "🧺"
          }
        ],
        "corretta": "cesta"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧢",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "armadio",
            "label": "ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "armadio"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "✏️",
        "opzioni": [
          {
            "valore": "astuccio",
            "label": "ASTUCCIO",
            "emoji": "✏️"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          }
        ],
        "corretta": "astuccio"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🥣",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "zaino",
            "label": "NELLO ZAINO",
            "emoji": "🎒"
          },
          {
            "valore": "cucina",
            "label": "CUCINA",
            "emoji": "🍳"
          }
        ],
        "corretta": "cucina"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🪥",
        "opzioni": [
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          },
          {
            "valore": "bagno",
            "label": "BAGNO",
            "emoji": "🛁"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "bagno"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🛌",
        "opzioni": [
          {
            "valore": "camera",
            "label": "CAMERA",
            "emoji": "🏠"
          },
          {
            "valore": "albero",
            "label": "SULL’ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          }
        ],
        "corretta": "camera"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🧀",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "pentola",
            "label": "NELLA PENTOLA",
            "emoji": "🍲"
          },
          {
            "valore": "frigo",
            "label": "FRIGO",
            "emoji": "🧊"
          }
        ],
        "corretta": "frigo"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "👞",
        "opzioni": [
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          },
          {
            "valore": "scarpiera",
            "label": "SCARPIERA",
            "emoji": "👞"
          },
          {
            "valore": "cuscino",
            "label": "SOTTO IL CUSCINO",
            "emoji": "🛏️"
          }
        ],
        "corretta": "scarpiera"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🪀",
        "opzioni": [
          {
            "valore": "cesta",
            "label": "CESTA",
            "emoji": "🧺"
          },
          {
            "valore": "vaso",
            "label": "NEL VASO DEI FIORI",
            "emoji": "🌷"
          },
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          }
        ],
        "corretta": "cesta"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "🥄",
        "opzioni": [
          {
            "valore": "luna",
            "label": "SULLA LUNA",
            "emoji": "🌙"
          },
          {
            "valore": "albero",
            "label": "SULL’ALBERO",
            "emoji": "🌳"
          },
          {
            "valore": "cucina",
            "label": "CUCINA",
            "emoji": "🍳"
          }
        ],
        "corretta": "cucina"
      },
      {
        "consegna": "Dove lo mettiamo?",
        "visuale": "👗",
        "opzioni": [
          {
            "valore": "automobile",
            "label": "IN AUTOMOBILE",
            "emoji": "🚗"
          },
          {
            "valore": "armadio",
            "label": "ARMADIO",
            "emoji": "🚪"
          },
          {
            "valore": "scarpa",
            "label": "NELLA SCARPA",
            "emoji": "👟"
          }
        ],
        "corretta": "armadio"
      }
    ]
  }
];

@Component({
  selector: 'app-giochi-3-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './giochi-3-4.component.html',
  styleUrl: './giochi-3-4.component.css'
})
export class Giochi34Component implements OnInit, OnDestroy {
  gioco!: GiocoConfig;
  indice = 0;
  stelle = 0;
  feedback: 'corretto' | 'sbagliato' | null = null;
  finito = false;
  rispostaSelezionata: string | null = null;
  private routeSub: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') ?? 'colori';
      this.gioco = GIOCHI.find(g => g.slug === slug) ?? GIOCHI[0];
      this.ricomincia(false);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }

  get domanda(): Domanda { return this.gioco.domande[this.indice]; }
  get avanzamento(): string { return `${this.indice + 1} / ${this.gioco.domande.length}`; }

  scegli(opzione: Opzione): void {
    if (this.feedback || this.finito) return;

    // Primo tocco: il bambino ascolta il concetto scelto.
    // Secondo tocco sulla stessa risposta: il gioco la conferma.
    if (this.rispostaSelezionata !== opzione.valore) {
      this.rispostaSelezionata = opzione.valore;
      this.parla(`${opzione.label}. Tocca ancora per confermare.`);
      return;
    }

    this.conferma(opzione);
  }

  conferma(opzione: Opzione): void {
    if (opzione.valore === this.domanda.corretta) {
      this.feedback = 'corretto';
      this.stelle++;
      this.parla('Bravissimo!');
      window.setTimeout(() => this.prossima(), 1100);
    } else {
      this.feedback = 'sbagliato';
      this.parla('Riprova!');
      window.setTimeout(() => {
        this.feedback = null;
        this.rispostaSelezionata = null;
      }, 900);
    }
  }

  prossima(): void {
    this.feedback = null;
    this.rispostaSelezionata = null;
    if (this.indice < this.gioco.domande.length - 1) {
      this.indice++;
      window.setTimeout(() => this.leggiConsegna(), 180);
    } else {
      this.finito = true;
      this.parla(`Bravissimo! Hai completato ${this.gioco.titolo}.`);
    }
  }

  leggiConsegna(): void { this.parla(this.domanda.consegna); }

  parla(testo: string): void {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const voce = new SpeechSynthesisUtterance(testo);
    voce.lang = 'it-IT';
    voce.rate = 0.9;
    voce.pitch = 1.05;
    const voci = window.speechSynthesis.getVoices();
    const italiana = voci.find(v => v.lang === 'it-IT' && /elsa|isabella/i.test(v.name))
      ?? voci.find(v => v.lang === 'it-IT')
      ?? voci.find(v => v.lang?.startsWith('it'));
    if (italiana) voce.voice = italiana;
    window.speechSynthesis.speak(voce);
  }

  ricomincia(leggi = true): void {
    this.indice = 0;
    this.stelle = 0;
    this.feedback = null;
    this.finito = false;
    this.rispostaSelezionata = null;
    if (leggi) window.setTimeout(() => this.leggiConsegna(), 250);
    else window.setTimeout(() => this.leggiConsegna(), 600);
  }

  tornaHome(): void { this.router.navigate(['/']); }
}
