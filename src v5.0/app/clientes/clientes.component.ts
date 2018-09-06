
import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { Clientes } from './../dataservice/clientes';
import { dataService } from './../dataservice/data.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})


export class ClientesComponent implements OnInit {

  clientes : Clientes[];

  getClientes(): void {
    this.dataService
      .getClientes()
      .then(Clientes => this.clientes = Clientes );
  }


      displayedColumns = [];
      @ViewChild(MatSort) sort: MatSort;

      /**
       * Pre-defined columns list for user table
       */
      columnNames = [{
        id: "id",
        value: "id"

      }, {
        id: "descripcion",
        value: "descripcion"
      },

      ];



     
      constructor(private dataService:dataService) {
        console.log('constructor ran..');
      }

      ngOnInit() {
        console.log('ngOnInit ran...');
        this.displayedColumns = this.columnNames.map(x => x.id);
        this.getClientes();
        
        /*this.createTable(); */
        
      }



/**
      createTable() {
        let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
        ];
        this.dataSource = new MatTableDataSource(tableArr);
        this.dataSource.sort = this.sort;
        this.selection = new SelectionModel<Element>(true, []);
        /** Whether the number of selected elements matches the total number of rows.


  }
 */
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  
      }


    export interface Element {
      position: number,
      name: string,
      weight: number,
      symbol: string


    }