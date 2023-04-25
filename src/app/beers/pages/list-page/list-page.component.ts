import { Component, OnInit } from '@angular/core';
import { Beer } from '../../interfaces/beer.interface';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})
export class ListPageComponent implements OnInit {
  public beers: Beer[] = [];

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
    this.beerService
      .getBeerList()
      .subscribe((beerList) => (this.beers = beerList));
  }
}
