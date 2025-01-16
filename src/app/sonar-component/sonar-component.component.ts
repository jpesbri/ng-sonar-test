import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-sonar-component',
  standalone: true,
  imports: [],
  templateUrl: './sonar-component.component.html',
  styleUrl: './sonar-component.component.css',
})
export class SonarComponentComponent implements OnInit {
  pokeService = inject(PokemonService);

  pokemonList: any[] = [];

  ngOnInit() {
    console.log('ngOninit');
    this.pokeService.getPokemonList().subscribe({
      next: (response) => {
        console.log(response);
        this.pokemonList = response.results;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
