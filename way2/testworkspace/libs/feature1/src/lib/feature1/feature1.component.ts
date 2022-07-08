import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadPokemons,
  Pokemon,
  selectPokemons,
} from '@testworkspace/shared-feature-statefull';

@Component({
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css'],
})
export class Feature1Component {
  pokemons$: Observable<Pokemon[]>;

  constructor(private store: Store) {
    this.pokemons$ = this.store.select(selectPokemons);
  }

  loadData() {
    this.store.dispatch(loadPokemons());
  }
}
