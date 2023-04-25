import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of } from 'rxjs';
import { Beer } from '../interfaces/beer.interface';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private http: HttpClient) { }

  API_URL: string = 'https://api.punkapi.com/v2/beers'

  getBeerList(): Observable<Beer[]> {
    return this.http.get<Beer[]>(this.API_URL);
  }

  getBeerById( id: string ): Observable<Beer|undefined> {
    return this.http.get<Beer>(`${this.API_URL}/${id}`)
    .pipe(
      catchError( error => of(undefined))
    )
  }
}
