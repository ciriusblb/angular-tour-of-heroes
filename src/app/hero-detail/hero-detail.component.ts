import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HoreService } from '../hore.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private _heroService: HoreService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._heroService._getHero(id).subscribe(
      hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this._heroService._updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
