import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  onSearch() {
    console.log('Buscando:', this.searchQuery);
    // Aquí podrías implementar la lógica para filtrar resultados o realizar la búsqueda.
  }
}
