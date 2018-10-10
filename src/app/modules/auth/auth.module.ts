import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from '../clientes/clientes.component';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule {
}
