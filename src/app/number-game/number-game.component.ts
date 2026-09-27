
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-number-game',
  templateUrl: './number-game.component.html',
  styleUrl: './number-game.component.css',
  imports: [CommonModule, DragDropModule,FontAwesomeModule,FormsModule ],
})
export class NumberGameComponent {

faEraser = faEraser;
  //availableNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  availableNumbers: number[] = [1];
  constructedNumbers: number[] = [];

  @ViewChild('dropZone') dropZone!: ElementRef;


  dropdownNumbers: number[] = [3,10, 20, 30, 40, 50, 60];
inputNumber: number | null = null;
dropdownOpen: boolean = false;
hovered: number | null = null;

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
  this.generateNumbers() 
}

selectNumber(n: number) {
  this.inputNumber = n;
  this.dropdownOpen = false;
}

private shuffle(array: number[]): number[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

generateNumbers() {
  if (this.inputNumber && this.inputNumber > 0) {
    this.availableNumbers = Array.from({ length: this.inputNumber }, (_, i) => i + 1);
    this.availableNumbers = this.shuffle([...this.availableNumbers]);
    
  }
  this.feedbackMessage = '';
}




  // Quando una lettera viene trascinata e rilasciata
  onDragEnd(event: CdkDragEnd, number: number) {
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
      this.constructedNumbers.push(number);
    }

    // Rimette la lettera nella posizione originale visiva
    event.source.reset();
  }

  reset() {
    this.constructedNumbers = [];
    this.feedbackMessage = '';
  }

  feedbackMessage: string = '';

controlla() {
  for (let i = 0; i < this.constructedNumbers.length - 1; i++) {
    if (this.constructedNumbers[i] > this.constructedNumbers[i + 1]) {
      this.feedbackMessage = 'Hai sbagliato 😞';
      return false;
    }
  }
  this.feedbackMessage = 'Bravo! 🎉';
  return true;
}



  removeLast() {
  this.constructedNumbers.pop();


}

}
