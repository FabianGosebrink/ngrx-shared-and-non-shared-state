import { loadPokemons, loadPokemonsFinished } from './feature3.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import {
  SharedFeatureService,
  Pokemon,
} from '@testworkspace/shared-feature-stateless';

@Injectable()
export class Feature3Effects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemons),
      mergeMap(() => {
        return this.sharedFeatureService
          .getData()
          .pipe(
            map((pokemons: Pokemon[]) => loadPokemonsFinished({ pokemons }))
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sharedFeatureService: SharedFeatureService
  ) {}
}
