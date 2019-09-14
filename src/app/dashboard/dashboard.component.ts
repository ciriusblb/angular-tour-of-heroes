import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HoreService } from '../hore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private _heroService: HoreService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this._heroService._getHeroes().subscribe(
      heroes => this.heroes = heroes.slice(1, 5)
    );
  }

}
