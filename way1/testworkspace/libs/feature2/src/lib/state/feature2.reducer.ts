import { loadPokemonsFinished } from './feature2.actions';
import { Pokemon } from '@testworkspace/shared-feature-stateless';
import { createReducer, on } from '@ngrx/store';

export interface Feature2State {
  pokemons: Pokemon[];
}

export const initialState: Feature2State = {
  pokemons: [],
};

export const feature2Reducer = createReducer(
  initialState,
  on(loadPokemonsFinished, (state, { pokemons }) => {
    return {
      ...state,
      pokemons,
    };
  })
);
