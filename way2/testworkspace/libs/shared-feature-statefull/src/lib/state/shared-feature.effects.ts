import { loadPokemons, loadPokemonsFinished } from './shared-feature.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';
import { SharedFeatureService } from '../shared-feature.service';
import { Pokemon } from '../pokemon';

@Injectable()
export class SharedFeatureEffects {
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
