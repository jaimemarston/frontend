import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {

  routes: Object[] = [{
      icon: '',
      route: '/depositos',
      title: 'Depositos',
      description: 'Item description',
    }, {
      icon: '',
      route: '/articulos',
      title: 'Articulos',
      description: 'Item description',
    }, {
      icon: '',
      route: '/clientes',
      title: 'Clientes',
      description: 'Item description',
    }, {
      icon: '',
      route: '/transporte',
      title: 'Transporte',
      description: 'Item description',
    },
  ];
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }
