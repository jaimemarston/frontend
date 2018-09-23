import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizacionComponent } from './Cotizacion.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatDialogModule,
  MatInputModule,
  MatSnackBarModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditCotizacionComponent } from './cotizacionmaestro/editcotizacion/editcotizacion.component';
import { CotizacionmaestroComponent } from './cotizacionmaestro/cotizacionmaestro.component';
import { CotizaciondetalleComponent } from './cotizaciondetalle/cotizaciondetalle.component';
import { EditcotizaciondetalleComponent } from './cotizaciondetalle/editcotizaciondetalle/editcotizaciondetalle.component';

const routes: Routes = [
  {
    path: '',
    component: CotizacionComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,         // <----- import(optional)
    RouterModule.forChild(routes)
  ],
  declarations: [CotizacionComponent, EditCotizacionComponent, CotizacionmaestroComponent, CotizaciondetalleComponent, EditcotizaciondetalleComponent],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}]
})
export class CotizacionModule {
}
