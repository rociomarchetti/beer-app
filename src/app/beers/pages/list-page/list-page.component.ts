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
  pageNumber: number = 1;

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
    this.beerService
      .getBeerList(this.pageNumber)
      .subscribe((beerList) => (this.beers = beerList));
  }

  onScroll() {
    this.beerService.getBeerList(this.pageNumber++).subscribe(resp => {
      this.beers.push(...resp)
    })
  }
}
