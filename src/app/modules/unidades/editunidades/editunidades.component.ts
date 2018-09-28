import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { UnidadService } from '../../../core/services/unidad.service';
import { BancoService } from '../../../core/services/banco.service';
import { IUnidad } from '../../../core/interfaces/unidad.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { Ibancos } from '../../../core/interfaces/varios.interface';


export interface Monedas {
  codigo: string;
  descripcion: string;
}

@Component({
  selector: 'app-editunidades',
  templateUrl: './editunidades.component.html',
  styleUrls: ['./../../../app.component.scss']
})

export class EditunidadesComponent implements OnInit, AfterViewInit {
  /**
   * mascara para poner formatos en inputs.
   * https://github.com/JsDaddy/ngx-mask
   * */

  selectedmon = '0'; /* moneda por defecto */
  selectedban = '';
  selectedban2 = '';

  private _id: number;
  get id(): number {
    return this._id;
  }

  @Input() set id(id: number) {
    this._id = id;
    if (id) {
      this.getClient();
    } else {
      if (this.registerForm) {
        this.registerForm.reset();
      }
    }
  }

/*   bancos: Bancos[] = [
    { codigo: 'steak-0', descripcion: '2018' },
    { codigo: 'pizza-1', descripcion: '2019' },
    { codigo: 'tacos-2', descripcion: '2020' }
  ]; */

monedas: Monedas[] = [
    { codigo: 'Soles', descripcion: 'Soles' },
    { codigo: 'Dolares', descripcion: 'Dolares' },
  ];


  unidad: IUnidad;
  registerForm: FormGroup;
  bancos: Array<Ibancos>;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() update: EventEmitter<IUnidad> = new EventEmitter<IUnidad>();

  @ViewChildren('inputs') inputs: QueryList<ElementRef<HTMLInputElement>>;

  constructor(private unidadService: UnidadService,
              private bancoService: BancoService,
              private formBuilder: FormBuilder,
              public snackBar: MatSnackBar) {
  }

  getBanco(): void {
    this.bancoService.getBancos()
      .subscribe(response => {
        this.bancos = response;

      });
  }

  ngOnInit() {
    this.createForm();
    this.getBanco();
  }

  ngAfterViewInit() {
  /*   console.log(this.inputs); */

  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      codigo: ['', Validators.compose([
        Validators.required
      ])],
      descripcion: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ])],
      placa: [''],
      npasajeros: [''],
      color: [''],
    });
  }

  getClient(): void {
    this.unidadService.getUnidad(this.id)
      .subscribe(response => {
        this.unidad = response;
        this.setForm();
      });
  }

  setForm(): void {
    this.registerForm.get('codigo').setValue(this.unidad.codigo);
    this.registerForm.get('descripcion').setValue(this.unidad.descripcion);
    this.registerForm.get('placa').setValue(this.unidad.placa);
    this.registerForm.get('npasajeros').setValue(this.unidad.npasajeros);

  }

  onBack(): void {
    this.back.emit(true);
  }

  saveForm(clear?: boolean): void {

    if (this.registerForm.valid) {
      this.saveClient();
      if (clear) {
        this.registerForm.reset();
      }
    } else {
      alert('FORMUARLIO INVALIDO');
    }
  }

  updateUnidad(): void {
    const data: IUnidad = this.registerForm.getRawValue();

    this.unidadService.updateUnidad(this.id, data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  addUnidad(): void {
    const data: IUnidad = this.registerForm.getRawValue();
    this.unidadService.addUnidad(data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  saveClient(): void {
    this.id ? this.updateUnidad() : this.addUnidad();
  }
}

