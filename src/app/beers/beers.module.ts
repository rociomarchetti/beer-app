import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BeersRoutingModule } from './beers-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BeerPageComponent } from './pages/beer-page/beer-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    BeerPageComponent,
    ListPageComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    ReactiveFormsModule
  ]
})
export class BeersModule { }
 