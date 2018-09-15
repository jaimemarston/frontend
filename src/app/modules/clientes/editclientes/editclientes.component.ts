import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteService } from '../../../core/services/cliente.service';
import { IClientes } from '../../../core/interfaces/clientes.interface';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrls: ['./editclientes.component.scss']
})

export class EditClientesComponent implements OnInit {
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

  constructor(private clienteService: ClienteService,
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
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(50),
      ])]
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
        this.snackBar.open('REGISTRO ACTUALIZADO SATISFACTORIAMENTE');
      });
  }

  addClient(): void {
    const data: IClientes = this.registerForm.getRawValue();
    this.clienteService.addClient(data)
      .subscribe(response => {
        this.update.emit(response);
        this.snackBar.open('REGISTRO AGREGADO SATISFACTORIAMENTE');
      });
  }

  saveClient(): void {
    this.id ? this.updateClient() : this.addClient();
  }
}

