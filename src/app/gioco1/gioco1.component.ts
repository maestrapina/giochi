import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gioco1',
  standalone: true,
  templateUrl: './gioco1.component.html',
  styleUrls: ['./gioco1.component.css'],
  imports: [CommonModule, DragDropModule,FontAwesomeModule],
  template: `
    <button (click)="removeLast()">
      <fa-icon [icon]="faEraser"></fa-icon> Cancella ultima lettera
    </button>
  `
})
export class Gioco1Component {
   faEraser = faEraser;
  availableLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z'];
  constructedLetters: string[] = [];

  @ViewChild('dropZone') dropZone!: ElementRef;

  // Quando una lettera viene trascinata e rilasciata
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
  }

  reset() {
    this.constructedLetters = [];
  }

  removeLast() {
  this.constructedLetters.pop();
}

}
