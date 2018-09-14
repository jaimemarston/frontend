import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule,
  MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { dataService } from './dataservice/data.service';
import {CdkTableModule} from '@angular/cdk/table';


import { ClientesComponent } from './clientes/clientes.component';
import { UnidadComponent } from './unidad/unidad.component';
import { TransporteComponent } from './transporte/transporte.component';
import { AddClientesComponent } from './clientes/addclientes/addclientes.component';
import { EditClientesComponent } from './clientes/editclientes/editclientes.component';
import { DeleclienteComponent } from './clientes/delecliente/delecliente.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    UserComponent,
    ClientesComponent,
    UnidadComponent,
    TransporteComponent,
    AddClientesComponent,
    EditClientesComponent,
    DeleclienteComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    HttpModule,
    HttpClientModule,
    MatCheckboxModule,
    MatTabsModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
  ],    
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
