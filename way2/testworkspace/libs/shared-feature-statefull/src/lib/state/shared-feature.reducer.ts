import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '../pokemon';
import { loadPokemonsFinished } from './shared-feature.actions';

export interface SharedFeatureState {
  pokemons: Pokemon[];
}

export const initialState: SharedFeatureState = {
  pokemons: [],
};

export const sharedFeatureReducer = createReducer(
  initialState,
  on(loadPokemonsFinished, (state, { pokemons }) => {
    return {
      ...state,
      pokemons,
    };
  })
);
