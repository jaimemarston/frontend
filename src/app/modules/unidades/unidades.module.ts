import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesComponent } from './unidades.component';

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
  MatSelectModule,
  MatListModule,
  MatGridListModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditunidadesComponent } from './editunidades/editunidades.component';


const routes: Routes = [
  {
    path: '',
    component: UnidadesComponent
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
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,         // <----- import(optional)
    MatGridListModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnidadesComponent, EditunidadesComponent],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}]
})
export class UnidadesModule {
}
