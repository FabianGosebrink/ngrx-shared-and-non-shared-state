import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root',
})
export class SharedFeatureService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Pokemon[]> {
    return this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon')
      .pipe(map((response) => response.results));
  }
}
