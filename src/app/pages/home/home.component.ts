import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal([
    'Instalar el angular cli',
    'Crear proyecto',
    'Crear componentes',
  ]);
}
