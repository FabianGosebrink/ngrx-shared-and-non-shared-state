import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadPokemons,
  Pokemon,
  selectPokemons,
} from '@testworkspace/shared-feature-statefull';

@Component({
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css'],
})
export class Feature2Component {
  pokemons$: Observable<Pokemon[]>;

  constructor(private store: Store) {
    this.pokemons$ = this.store.select(selectPokemons);
  }

  loadData() {
    this.store.dispatch(loadPokemons());
  }
}
