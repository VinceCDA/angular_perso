import { Component,OnInit } from '@angular/core';
// import { POKEMONS } from './mock-pokemon-list';
// import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  // pokemonList:Pokemon[];
  // pokemonSelected:Pokemon | undefined;

  ngOnInit(): void{
    // console.table(POKEMONS)
    // this.pokemonList = POKEMONS
  }

  // selectPokemon(pokemonId:string){
  //   let pokemon : Pokemon | undefined = this.pokemonList.find(x => x.id == +pokemonId)
  //   if (pokemon) {
  //     console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  //     this.pokemonSelected = pokemon;
  //   }
  //   else {
  //     console.log(`Le pokémon sélectionné n'existe pas.`);
  //     this.pokemonSelected = pokemon;
  //   }
    
  // }
}
