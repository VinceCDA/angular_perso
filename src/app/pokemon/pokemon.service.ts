import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){}

  getPokemonList():Observable<Pokemon[] | any>{
    //return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,[]))
      );
  }

  getPokemonById(pokemonId:number):Observable<Pokemon | any>{
    //return POKEMONS.find(pokemon => pokemon.id == pokemonId)
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined))
      ); 
  }

  searchPokemonList(term:string):Observable<Pokemon[]>{

    if (term.length <=1) {
      return of([])
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,[]))
    )
  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon | any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined))
    )
  }

  updatePokemon(pokemon:Pokemon):Observable<Pokemon | any>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.put('api/pokemons',pokemon,httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined))
      )    
  }
  deletePokemonById(pokemonId:number):Observable<Pokemon | any>{

    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error,undefined))
      )    
  }

  private log(response: Pokemon[] | Pokemon | any){
    console.table(response)
  }
  private handleError(error:Error,errorValue : any){
    console.log(error);
    return of (errorValue);
  }

  getPokemonTypeList():string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ]
  }
}
