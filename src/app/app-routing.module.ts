import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from './core/layouts/main-nav/main-nav.component';

const routes: Routes = [
  {
    path: '',
    component: MainNavComponent,
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
