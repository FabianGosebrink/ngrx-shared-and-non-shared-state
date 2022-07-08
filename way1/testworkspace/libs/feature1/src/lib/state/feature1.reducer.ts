import { loadPokemonsFinished } from './feature1.actions';
import { Pokemon } from '@testworkspace/shared-feature-stateless';
import { createReducer, on } from '@ngrx/store';

export interface Feature1State {
  pokemons: Pokemon[];
}

export const initialState: Feature1State = {
  pokemons: [],
};

export const feature1Reducer = createReducer(
  initialState,
  on(loadPokemonsFinished, (state, { pokemons }) => {
    return {
      ...state,
      pokemons,
    };
  })
);
