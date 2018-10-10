import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTabChangeEvent, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { Cotizacion } from '../../dataservice/cotizacion';
import { DataService } from '../../dataservice/data.service';
import { CotizacionService } from '../../core/services/cotizacion.service';
import { ICotizacion, ICotizaciondetalle } from '../../core/interfaces/cotizacion.interface';
import { SelectionModel } from '@angular/cdk/collections';
import { CotizacionmaestroComponent } from './cotizacionmaestro/cotizacionmaestro.component';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./../../app.component.scss']
})
export class CotizacionComponent implements OnInit {
  detail: Array<ICotizaciondetalle>;
  idMaster: number;
  @ViewChild(CotizacionmaestroComponent) cotizacionMaestro: CotizacionmaestroComponent;

  constructor() {
  }

  ngOnInit() {
  }

  setDetail(detail: Array<ICotizaciondetalle>): any {
    this.detail = detail;
    this.idMaster = this.cotizacionMaestro.selectedId;
  }

  getCotizaciones(): void {
    this.cotizacionMaestro.getCotizacion();

  }
}
