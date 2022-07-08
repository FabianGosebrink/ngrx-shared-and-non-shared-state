import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '@testworkspace/shared-feature-stateless';
import { Observable } from 'rxjs';
import { loadPokemons } from '../state/feature2.actions';
import { selectPokemons } from '../state/feature2.selectors';

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
