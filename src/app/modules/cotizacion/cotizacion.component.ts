import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTabChangeEvent, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Cotizacion } from '../../dataservice/cotizacion';
import { DataService } from '../../dataservice/data.service';
import { CotizacionService } from '../../core/services/cotizacion.service';
import { ICotizacion } from '../../core/interfaces/cotizacion.interface';
import { SelectionModel } from '@angular/cdk/collections';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class CotizacionComponent implements OnInit {
  detail: any;
  constructor() { }

  ngOnInit() {
  }

  showDetail(detail: any): any {
    this.detail = detail;
    console.log(detail);
  }
}
