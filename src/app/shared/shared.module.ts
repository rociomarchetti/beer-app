import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    Error404PageComponent
  ],
  exports: [
    Error404PageComponent
  ]
})
export class SharedModule { }
