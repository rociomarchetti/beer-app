import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'https://api.punkapi.com/v2/beers?page=1&per_page=12'

  getBeerList(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.API_URL);
  }
}
