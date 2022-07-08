import { createSelector } from '@ngrx/store';
import { Feature2State } from './feature2.reducer';

export const selectFeature2 = (state: any) => state.feature2;

export const selectPokemons = createSelector(
  selectFeature2,
  (state: Feature2State) => state.pokemons
);
