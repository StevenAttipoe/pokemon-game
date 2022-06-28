import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any> {
    let pokemonData = this.http.get("https://pokeapi.co/api/v2/pokemon/ditto");
    console.log(pokemonData);
    return pokemonData;
  }
}
