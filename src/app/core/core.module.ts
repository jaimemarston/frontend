import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from './layouts/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatIconModule,
  MatOptionModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatListModule,
    RouterModule
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent]
})
export class CoreModule {
}
