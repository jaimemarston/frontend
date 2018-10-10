import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente.service';
import { BancoService } from '../../../core/services/banco.service';
import { IClientes } from '../../../core/interfaces/clientes.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { Ibancos } from '../../../core/interfaces/varios.interface';


export interface Monedas {
  codigo: string;
  descripcion: string;
}

@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrls: ['./../../../app.component.scss'],

})

export class EditClientesComponent implements OnInit, AfterViewInit {
  /**
   * mascara para poner formatos en inputs.
   * https://github.com/JsDaddy/ngx-mask
   * */

  selectedmon = '0'; /* moneda por defecto */
  selectedmon2 = '0'; /* moneda por defecto */
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


  cliente: IClientes;
  registerForm: FormGroup;
  bancos: Array<Ibancos>;
  bancos2: Array<Ibancos>;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() update: EventEmitter<IClientes> = new EventEmitter<IClientes>();

  /* @ViewChildren('inputs') inputs: QueryList<ElementRef<HTMLInputElement>>; */
  @ViewChild('inputNombre') inputNombre: ElementRef<HTMLInputElement>;

  constructor(private clienteService: ClienteService,
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
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
      ])],
      ruc: [''],
      telefono1: [''],
      telefono2: [''],
      telefono3: [''],
      contacto: [''],
      telcontacto: [''],
      direccion: [''],
      correo: [''],
      paginaweb: [''],
      tipocc: [''],
      destipocc: [''],
      condcompvent: [''],
      banco_nombre1: [''],
      banco_cuenta1: [''],
      banco_moneda1: [''],
      banco_nombre2: [''],
      banco_cuenta2: [''],
      banco_moneda2: [''],
      fechanac: [''],
      fechaini: [''],
      fechafin: [''],
    });

  }

  getClient(): void {
    this.clienteService.getCliente(this.id)
      .subscribe(response => {
        this.cliente = response;
        this.setForm();

      });
  }

  setForm(): void {

    this.registerForm.get('nombre').setValue(this.cliente.nombre);
    this.registerForm.get('ruc').setValue(this.cliente.ruc);
    this.registerForm.get('telefono1').setValue(this.cliente.telefono1);
    this.registerForm.get('telefono2').setValue(this.cliente.telefono2);
    this.registerForm.get('telefono3').setValue(this.cliente.telefono3);
    this.registerForm.get('contacto').setValue(this.cliente.contacto);
    this.registerForm.get('telcontacto').setValue(this.cliente.telcontacto);
    this.registerForm.get('direccion').setValue(this.cliente.direccion);
    this.registerForm.get('correo').setValue(this.cliente.correo);
    this.registerForm.get('paginaweb').setValue(this.cliente.paginaweb);
    this.registerForm.get('tipocc').setValue(this.cliente.tipocc);
    this.registerForm.get('destipocc').setValue(this.cliente.tipocc);
    this.registerForm.get('condcompvent').setValue(this.cliente.tipocc);
    this.registerForm.get('banco_nombre1').setValue(this.cliente.banco_nombre1);
    this.registerForm.get('banco_cuenta1').setValue(this.cliente.banco_cuenta1);
    this.registerForm.get('banco_moneda1').setValue(this.cliente.banco_moneda1);
    this.registerForm.get('banco_nombre2').setValue(this.cliente.banco_nombre2);
    this.registerForm.get('banco_cuenta2').setValue(this.cliente.banco_cuenta2);
    this.registerForm.get('banco_moneda2').setValue(this.cliente.banco_moneda2);
    this.registerForm.get('fechanac').setValue(this.cliente.fechanac);
    this.registerForm.get('fechaini').setValue(this.cliente.fechaini);
    this.registerForm.get('fechafin').setValue(this.cliente.fechafin);
  }

  onBack(): void {
    this.back.emit(true);
  }

  saveForm(clear?: boolean): void {

    if (this.registerForm.valid) {
      this.saveClient();
      if (clear) {
        this.registerForm.reset();
        this.inputNombre.nativeElement.focus();
      }
    } else {
      alert('FORMUARLIO INVALIDO');
    }
  }

  updateClient(): void {
    const data: IClientes = this.registerForm.getRawValue();

    this.clienteService.updateCliente(this.id, data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  addClient(): void {
    const data: IClientes = this.registerForm.getRawValue();
    this.clienteService.addClient(data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('Registro agregado satisfactoriamente...!');
      });
  }

  saveClient(): void {
    this.id ? this.updateClient() : this.addClient();
  }
}

