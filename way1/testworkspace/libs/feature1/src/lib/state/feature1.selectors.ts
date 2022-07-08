import { createSelector } from '@ngrx/store';
import { Feature1State } from './feature1.reducer';

export const selectFeature1 = (state: any) => state.feature1;

export const selectPokemons = createSelector(
  selectFeature1,
  (state: Feature1State) => state.pokemons
);
