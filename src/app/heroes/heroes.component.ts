import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HoreService } from '../hore.service';

@Component({  // @Component es una función decoradora que especifica los metadatos angulares para el componente.
  selector: 'app-heroes', // selector- el selector de elementos CSS del componente
  templateUrl: './heroes.component.html', // templateUrl- la ubicación del archivo de plantilla del componente.
  styleUrls: ['./heroes.component.css'] // styleUrls- la ubicación de los estilos CSS privados del componente.
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _horeService: HoreService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this._horeService._getHeroes().subscribe(
      heroes => this.heroes = heroes
    );
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this._horeService._addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this._horeService._deleteHero(hero).subscribe();
  }

}
