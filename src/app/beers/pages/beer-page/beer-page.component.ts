import { Component, OnInit } from '@angular/core';
import { BeersService } from '../../services/beers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Beer } from '../../interfaces/beer.interface';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css'],
})
export class BeerPageComponent implements OnInit {

  public beer!: Beer;

  constructor(
    private beerService: BeersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.beerService.getBeerById(id)))
      .subscribe( beer => {
        if(!beer) return this.router.navigate(['/beers/list']);
        this.beer = beer[0];
        console.log(beer)
        return
      });
  }
}
