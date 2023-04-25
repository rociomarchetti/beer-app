import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    BeerPageComponent,
    ListPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    BeersRoutingModule
  ]
})
export class BeersModule { }
