import { Component, OnInit } from '@angular/core';
import { PokemonApiService } from 'src/app/service/pokemon-api.service';

@Component({
  selector: 'app-view-pokemon-data',
  templateUrl: './view-pokemon-data.component.html',
  styleUrls: ['./view-pokemon-data.component.css']
})
export class ViewPokemonDataComponent implements OnInit {

  constructor(private pokemonServiceApi:PokemonApiService) { }

  ngOnInit(): void {
      this.pokemonServiceApi.getPokemon().subscribe(e=>{
        console.log(e);
      });
  }

}
