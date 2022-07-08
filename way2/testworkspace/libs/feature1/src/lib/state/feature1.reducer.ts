import { createReducer } from '@ngrx/store';

export const initialState = {
  pokemons: [],
};

export const feature1Reducer = createReducer(initialState);
