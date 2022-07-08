import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '@testworkspace/shared-feature-stateless';
import { Observable } from 'rxjs';
import { loadPokemons } from '../state/feature3.actions';
import { selectPokemons } from '../state/feature3.selectors';

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
