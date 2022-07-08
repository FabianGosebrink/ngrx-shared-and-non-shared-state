import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadPokemons,
  Pokemon,
  selectPokemons,
} from '@testworkspace/shared-feature-statefull';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feature3',
  templateUrl: './feature3.component.html',
  styleUrls: ['./feature3.component.css'],
})
export class Feature3Component {
  pokemons$: Observable<Pokemon[]>;

  constructor(private store: Store) {
    this.pokemons$ = this.store.select(selectPokemons);
  }

  loadData() {
    this.store.dispatch(loadPokemons());
  }
}
