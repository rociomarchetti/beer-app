import { Component } from '@angular/core';
import { BeersService } from '../../services/beers.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  beerName: string = '';
  beerID?: number;
  notFound: boolean = false;

  public searchForm: FormGroup = this.fb.group({
    beerName: ['', [Validators.required, Validators.minLength(2)]],
  });

  constructor(
    private beerService: BeersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  search() {
    this.beerName = this.searchForm.controls['beerName'].value;
    this.beerService.getBeersByName(this.beerName).subscribe((resp) => {
      if (resp.length > 0) {
        this.beerID = resp[0].id;
        this.router.navigate([`/beers/${this.beerID}`]);
      }
    });
    this.notFound = true;
    this.searchForm.reset();
  }
}
