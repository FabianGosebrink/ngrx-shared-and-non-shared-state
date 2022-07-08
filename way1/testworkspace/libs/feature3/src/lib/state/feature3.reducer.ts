import { loadPokemonsFinished } from './feature3.actions';
import { Pokemon } from '@testworkspace/shared-feature-stateless';
import { createReducer, on } from '@ngrx/store';

export interface Feature3State {
  pokemons: Pokemon[];
}

export const initialState: Feature3State = {
  pokemons: [],
};

export const feature3Reducer = createReducer(
  initialState,
  on(loadPokemonsFinished, (state, { pokemons }) => {
    return {
      ...state,
      pokemons,
    };
  })
);
