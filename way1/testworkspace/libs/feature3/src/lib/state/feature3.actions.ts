import { createAction, props } from '@ngrx/store';
import { Pokemon } from '@testworkspace/shared-feature-stateless';

export const loadPokemons = createAction('[Feature3] Load Pokemons');

export const loadPokemonsFinished = createAction(
  '[Feature3] Load Pokemons Finished',
  props<{ pokemons: Pokemon[] }>()
);
