import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-shared-feature-list',
  templateUrl: './shared-feature-list.component.html',
  styleUrls: ['./shared-feature-list.component.css'],
})
export class SharedFeatureListComponent {
  @Input() pokemons: Pokemon[] | null = [];
}
