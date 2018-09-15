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
        path: 'unidades',
        loadChildren: './modules/unidades/unidades.module#UnidadesModule'
      },
      {
        path: 'transportes',
        loadChildren: './modules/transportes/transportes.module#TransportesModule'
      },
      {
        path: 'articulos',
        loadChildren: './modules/articulos/articulos.module#ArticulosModule'
      }
    ]
    // children: [
    //   {
    //     path: 'clientes',
    //     children: [
    //       {
    //         path: '',
    //         component: ClientesComponent,
    //       },
    //       {
    //         path: 'add',
    //         component: AddClientesComponent,
    //       },
    //       {
    //         path: 'edit',
    //         component: EditClientesComponent,
    //       },
    //     ]
    //   },
    //
    //   {
    //     path: 'transporte',
    //     children: [
    //
    //       {
    //         path: '',
    //         component: TransporteComponent,
    //       },
    //
    //
    //     ]
    //   },
    //
    //   {
    //     path: 'unidad',
    //     children: [
    //
    //       {
    //         path: '',
    //         component: UnidadComponent,
    //       },
    //
    //
    //     ]
    //   },
    //
    //
    // ],
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
