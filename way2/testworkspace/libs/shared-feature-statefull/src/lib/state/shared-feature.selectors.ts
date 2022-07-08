import { SharedFeatureState } from './shared-feature.reducer';
import { createSelector } from '@ngrx/store';

export const selectSharedFeature = (state: any) => state.sharedfeature;

export const selectPokemons = createSelector(
  selectSharedFeature,
  (state: SharedFeatureState) => state.pokemons
);
