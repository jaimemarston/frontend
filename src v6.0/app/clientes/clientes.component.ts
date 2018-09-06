
import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatTabsModule } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Clientes } from './../dataservice/clientes';
import { dataService } from './../dataservice/data.service';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';



/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})


export class ClientesComponent  {
  

  displayedColumns: string[] = ['id', 'nombre', 'codigo', 'options' ];
  

  promisclientes: Promise<Clientes[]>
  clientes: Clientes[];
  errorMessage: String;
 
  constructor(private dataService: dataService) { }

   ngOnInit(): void {
    this.promisclientes = this.dataService.getClientes();
    this.promisclientes.then(
     clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);

  }

}
