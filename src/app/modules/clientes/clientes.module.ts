import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { AddClientesComponent } from './addclientes/addclientes.component';
import { DeleclienteComponent } from './delecliente/delecliente.component';
import { RouterModule, Routes } from '@angular/router';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatCheckboxModule, MatPaginatorModule, MatDialogModule, MatInputModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
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
    RouterModule.forChild(routes)
  ],
  declarations: [ClientesComponent, AddClientesComponent, DeleclienteComponent]
})
export class ClientesModule {
}
