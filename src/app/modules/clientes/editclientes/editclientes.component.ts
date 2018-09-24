import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente.service';
import { IClientes } from '../../../core/interfaces/clientes.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrls: ['./editclientes.component.scss'],

})

export class EditClientesComponent implements OnInit, AfterViewInit {
  /**
   * mascara para poner formatos en inputs.
   * https://github.com/JsDaddy/ngx-mask
   * */
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

  cliente: IClientes;

  registerForm: FormGroup;

  @Output() back: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() update: EventEmitter<IClientes> = new EventEmitter<IClientes>();

  @ViewChildren('inputs') inputs: QueryList<ElementRef<HTMLInputElement>>;

  constructor(private clienteService: ClienteService,
              private formBuilder: FormBuilder,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createForm();
  }

  ngAfterViewInit() {
    console.log(this.inputs);
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      codigo: ['', Validators.compose([
        Validators.required
      ])],
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
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
    this.registerForm.get('codigo').setValue(this.cliente.codigo);
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

