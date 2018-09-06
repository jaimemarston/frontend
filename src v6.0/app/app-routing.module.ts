import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavComponent } from './main-nav/main-nav.component';

import { ClientesComponent } from './clientes/clientes.component';

import { TransporteComponent } from './transporte/transporte.component';

import { UnidadComponent } from './unidad/unidad.component';



const routes: Routes = [
    {
        path: '',
        component: MainNavComponent,
        children: [
       
        {
            path: 'clientes',
            children: [

            {
                path: '',
                component: ClientesComponent,
            },
            

            ]
        },

        {
            path: 'transporte',
            children: [

            {
                path: '',
                component: TransporteComponent,
            },
            

            ]
        },

        {
            path: 'unidad',
            children: [

            {
                path: '',
                component: UnidadComponent,
            },
            

            ]
        },


        ],
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainNavComponent,
];
