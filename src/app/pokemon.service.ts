import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private readonly http: HttpClient) {}

  getPokemonList(limit: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?limit=${limit}`);
  }
}
