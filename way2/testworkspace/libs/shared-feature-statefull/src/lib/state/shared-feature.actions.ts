import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../pokemon';

export const loadPokemons = createAction('[Shared Feature] Load Pokemons');

export const loadPokemonsFinished = createAction(
  '[Shared Feature] Load Pokemons Finished',
  props<{ pokemons: Pokemon[] }>()
);
