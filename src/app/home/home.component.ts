import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- aggiungi RouterModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']    // correggi da styleUrl a styleUrls
})
export class HomeComponent {

}
