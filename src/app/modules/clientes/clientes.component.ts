import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Clientes } from '../../dataservice/clientes';
import { DataService } from '../../dataservice/data.service';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})


export class ClientesComponent implements OnInit {


  displayedColumns: string[] = ['select', 'id', 'nombre', 'codigo', 'options'];
  private selectedTab = 0;
  promisclientes: Promise<Clientes[]>;
  clientes: Clientes[];
  errorMessage: String;


  delete(art): void {
    this.dataService.deleteCliente(art.id);
    this.clientes = this.clientes.filter(a => a !== art);

  }

  constructor(
    private dataService: DataService,
    private router: Router,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.promisclientes = this.dataService.getClientes();
    this.promisclientes.then(
      clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);
  }

  public editRecord(recordId) {
    this.selectedTab = 1;
    this.dataService.getClientesid(recordId);
  }

  public addRecord() {
    this.selectedTab = 1;
  }


  refreshRecord(event: MatTabChangeEvent) {
    this.selectedTab = event.index;

    this.promisclientes = this.dataService.getClientes();
    this.promisclientes.then(
      clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);
  }


}
