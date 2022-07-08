import { selectPokemons } from './../state/feature1.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '@testworkspace/shared-feature-stateless';
import { Observable } from 'rxjs';
import { loadPokemons } from '../state/feature1.actions';

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
