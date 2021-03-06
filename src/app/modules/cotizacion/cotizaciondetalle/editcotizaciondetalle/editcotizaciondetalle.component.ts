import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CotizaciondetalleService } from '../../../../core/services/cotizaciondetalle.service';
import { ICotizaciondetalle } from '../../../../core/interfaces/cotizacion.interface';
import { IArticulo } from '../../../../core/interfaces/articulo.interface';
import { ArticuloService } from '../../../../core/services/articulo.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-editcotizaciondetalle',
  templateUrl: './editcotizaciondetalle.component.html',
  styleUrls: ['./../../../../app.component.scss']
})

export class EditcotizaciondetalleComponent implements OnInit {
  private _id: number;
  get id(): number {
    return this._id;
  }

  @Input() set id(id: number) {
    this._id = id;

    if (id) {
      this.getCotizacion();
    } else {
      if (this.registerForm) {
        this.registerForm.reset();
      }
    }
  }

  @Input() idMaster: number;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredArticulos: Observable<Array<IArticulo>>;


  cotizacion: ICotizaciondetalle;
  articulos: Array<IArticulo>;
  registerForm: FormGroup;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() update: EventEmitter<ICotizaciondetalle> = new EventEmitter<ICotizaciondetalle>();

  @ViewChild('inputCodigo') inputCodigo: ElementRef<HTMLInputElement>;

  constructor(private cotizacionService: CotizaciondetalleService,
              private formBuilder: FormBuilder,
              private articuloService: ArticuloService,
              public snackBar: MatSnackBar) {
  }

  getArticulo(): void {
    this.articuloService.getArticulos()
      .subscribe(response => {
        this.articulos = response;
        // this.filteredArticulos = from(this.articulos);
      });
  }

  ngOnInit() {
    this.createForm();
    this.getArticulo();
  }

  private _filter(value: string): IArticulo[] {
    if (value && this.articulos) {
      const filterValue = value.toLowerCase();
      return this.articulos.filter(option => option.descripcion.toLowerCase().indexOf(filterValue) === 0);
    }

    return [];
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      codigo: [''],
      descripcion: [''],
      desunimed: [''],
      cantidad: [''],
      precio: [''],
      imptotal: [''],
    });

    const descripcionForm = this.registerForm.get('descripcion');
    this.filteredArticulos = descripcionForm.valueChanges.pipe(
      map(value => this._filter(value))
    );
  }

  getCotizacion(): void {

    this.cotizacionService.getCotizacion(this.id)
      .subscribe(response => {
        this.cotizacion = response;
        this.setForm();
      });
  }

  setForm(): void {
    this.registerForm.get('codigo').setValue(this.cotizacion.codigo);
    this.registerForm.get('descripcion').setValue(this.cotizacion.descripcion);
    this.registerForm.get('desunimed').setValue(this.cotizacion.desunimed);
    this.registerForm.get('cantidad').setValue(this.cotizacion.cantidad);
    this.registerForm.get('precio').setValue(this.cotizacion.precio);
    this.registerForm.get('imptotal').setValue(this.cotizacion.imptotal);
  }

  onBack(): void {
    this.back.emit(true);
  }

  saveForm(clear?: boolean): void {
    if (this.registerForm.valid) {
      this.saveCotizacion();
      if (clear) {
        this.registerForm.reset();
        this.inputCodigo.nativeElement.focus();
      }
    } else {
      alert('FORMUARLIO INVALIDO');
    }
  }

  prepareData() {
    /** rest spread, paso de parametros REST, este método sirve para clonar objetos. destructuración de datos
     * http://www.etnassoft.com/2016/07/04/desestructuracion-en-javascript-parte-1/ */
    const data: ICotizaciondetalle = {...this.registerForm.getRawValue()};
    data.master = this.idMaster;

    return data;
  }

  updateCotizacion(): void {
    const data = this.prepareData();
    this.cotizacionService.updateCotizacion(this.id, data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  addCotizacion(): void {
    const data = this.prepareData();

    /*     console.log('data');
        console.log(data); */
    this.cotizacionService.addCotizacion(data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  saveCotizacion(): void {

    this.id ? this.updateCotizacion() : this.addCotizacion();
  }
}
