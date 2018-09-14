
import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatTabsModule, MatPaginator, MatDialog, MatTabChangeEvent } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Clientes } from './../dataservice/clientes';
import { dataService } from './../dataservice/data.service';
import { AddClientesComponent } from './addclientes/addclientes.component';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {Router} from "@angular/router";


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})


export class ClientesComponent  {


  displayedColumns: string[] = ['select', 'id', 'nombre', 'codigo', 'options' ];
  private AddClientesComponent = AddClientesComponent;
  private selectedTab = 0;
  private router: Router;

  promisclientes: Promise<Clientes[]>
  clientes: Clientes[];
  errorMessage: String;


  delete(art): void {
    this.dataService.deleteCliente(art.id);
    this.clientes = this.clientes.filter(a => a !== art);

  }

  constructor(
    private dataService: dataService,
    private router: Router,
    public dialog: MatDialog,
    ) { }

   ngOnInit(): void {
    this.promisclientes = this.dataService.getClientes();
    this.promisclientes.then(
     clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);

  }
  public editRecord(recordId) {
    this.selectedTab = 1;
    console.log(recordId);
    this.dataService.getClientesid(recordId);
    /*this.router.navigate(['edit']);*/

  }

  /*
  editRecord(art): void {
    console.log(art);
    this.selectedTab = 1;
  }
  */
  // ------------------ ADD --------------------


  public addRecord() {
    this.selectedTab = 1;
  }

 
  refreshRecord(event: MatTabChangeEvent) {
      this.selectedTab = event.index;

      this.promisclientes = this.dataService.getClientes();
      this.promisclientes.then(
      clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);
    /*  console.log('event => ', event);
      console.log('index => ', event.index);
      console.log('tab => ', event.tab);
    */
  }



}
