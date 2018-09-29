import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './core/layouts/main-nav/main-nav.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainNavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'clientes',
        loadChildren: './modules/clientes/clientes.module#ClientesModule'
      },
      {
        path: 'cotizacion',
        loadChildren: './modules/cotizacion/cotizacion.module#CotizacionModule'
      },
      {
        path: 'unidades',
        loadChildren: './modules/unidades/unidades.module#UnidadesModule'
      },
      {
        path: 'articulos',
        loadChildren: './modules/articulos/articulos.module#ArticulosModule'
      },
    ]
  },
  {
    path: 'login',
    component: BlankLayoutComponent,
    loadChildren: './modules/auth/auth.module#AuthModule'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
