import { Component, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent {
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  routes: Object[] = [{
      icon: 'library_books',
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  }
