import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatSnackBar, MatTabChangeEvent, MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ArticuloService } from '../../core/services/articulo.service';
import { IArticulo } from '../../core/interfaces/articulo.interface';
import { SelectionModel } from '@angular/cdk/collections';

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./../../app.component.scss']
})

export class ArticulosComponent implements OnInit {
  displayedColumns: string[] = ['select', 'codigo', 'descripcion', 'options'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  articulos: Array<IArticulo>;
  dataSource = new MatTableDataSource<IArticulo>();
  errorMessage: String;
  selectedId: number;
  edit: boolean;


  /** checkbox datatable */
  selection = new SelectionModel<IArticulo>(true, []);

  constructor(
    private articuloService: ArticuloService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos(): void {
    this.articuloService.getArticulos()
      .subscribe(response => {
        this.articulos = response;
        this.dataSource.data = this.articulos;
        this.dataSource.paginator = this.paginator;
        this.paginator._intl.itemsPerPageLabel = 'Item por Pagina:';
      });
  }

  delete(id: number): void {
    this.selectedId = id;

    this.deleteClient();

  }

  deleteClient(): void {
    this.articuloService.deleteArticulo(this.selectedId)
      .subscribe(response => {
        /* console.log(response); */
        this.getArticulos();
      });
  }

  public editRecord(id: number): void {
    this.selectedId = id;
    this.edit = true;
  }

  public addRecord() {
    this.edit = true;
    this.selectedId = null;
  }

  showDataTable(): void {
    this.edit = false;
  }

  updateDataTable(data: IArticulo): void {
    this.getArticulos();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


  openPrint() {
    window.print();
  }

  /**
   * async await sirve para esperar que una promesa sea cumplida
   * */
  async deleteAllSelecteds() {
    const selecteds = this.selection.selected;
    for (let index = 0; index < selecteds.length; index++) {
      await this.articuloService.deleteArticulo(selecteds[index].id).toPromise();
      if (index === selecteds.length - 1) {
        this.snackBar.open('ELMINADOS TODOS');
        this.getArticulos();
      }
    }
  }
}
