import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { UnidadComponent } from './unidad/unidad.component';
import { TransporteComponent } from './transporte/transporte.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    UserComponent,
    ClientesComponent,
    UnidadComponent,
    TransporteComponent,
    

  ],
  imports: [
    AppRoutingModule, 
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
