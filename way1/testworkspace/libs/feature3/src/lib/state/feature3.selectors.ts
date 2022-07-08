import { createSelector } from '@ngrx/store';
import { Feature3State } from './feature3.reducer';

export const selectFeature3 = (state: any) => state.feature3;

export const selectPokemons = createSelector(
  selectFeature3,
  (state: Feature3State) => state.pokemons
);
