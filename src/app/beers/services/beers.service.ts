import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/beer.interface';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  constructor(private http: HttpClient) {}

  API_URL: string = 'https://api.punkapi.com/v2/beers';
  perPage: number = 12;

  getBeerList(pageNumber: number): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.API_URL}?page=${pageNumber}&per_page=${this.perPage}`);
  }

  getBeerById(id: string): Observable<Beer[]> {
    return this.http
      .get<Beer[]>(`${this.API_URL}/${id}`)
  }

  getBeersByName(name: string): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.API_URL}?beer_name=${name}`);
  }
}