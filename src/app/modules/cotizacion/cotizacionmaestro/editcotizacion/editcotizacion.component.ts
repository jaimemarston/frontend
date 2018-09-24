import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CotizacionService } from '../../../../core/services/cotizacion.service';
import { ICotizacion } from '../../../../core/interfaces/cotizacion.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editcotizacion',
  templateUrl: './editcotizacion.component.html',
  styleUrls: ['./editcotizacion.component.scss']
})

export class EditCotizacionComponent implements OnInit {
  private _id: number;
  get id(): number {
    return this._id;
  }

  @Input() set id(id: number) {
    this._id = id;
    console.log(this.id);
    if (id) {
      this.getCotizacion();
    } else {
      if (this.registerForm) {
        this.registerForm.reset();
      }
    }
  }

  cotizacion: ICotizacion;

  registerForm: FormGroup;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() update: EventEmitter<ICotizacion> = new EventEmitter<ICotizacion>();

  constructor(private cotizacionService: CotizacionService,
              private formBuilder: FormBuilder,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      codigo: ['', Validators.compose([
        Validators.required
      ])],
      fechadoc: [''],
      desruc: [''],
      ruc: ['']
    });
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
    this.registerForm.get('fechadoc').setValue(this.cotizacion.fechadoc);
    this.registerForm.get('ruc').setValue(this.cotizacion.ruc);
    this.registerForm.get('desruc').setValue(this.cotizacion.desruc);

  }

  onBack(): void {
    this.back.emit(true);
  }

  saveForm(clear?: boolean): void {
    if (this.registerForm.valid) {
      this.saveCotizacion();
      if (clear) {
        this.registerForm.reset();
      }
    } else {
      alert('FORMUARLIO INVALIDO');
    }
  }

  updateCotizacion(): void {
    const data: ICotizacion = this.registerForm.getRawValue();
    this.cotizacionService.updateCotizacion(this.id, data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  addCotizacion(): void {
    const data: ICotizacion = this.registerForm.getRawValue();
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

