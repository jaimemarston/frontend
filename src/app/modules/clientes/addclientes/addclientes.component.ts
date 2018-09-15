import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../../dataservice/data.service';


@Component({
  selector: 'app-addclientes',
  templateUrl: './addclientes.component.html',
  styleUrls: ['./addclientes.component.scss']
})
export class AddClientesComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Graba info registrada en formulario
    this.dataService.agregaClientes(this.registerForm.value);
    console.log('Form Submitted!');
    this.registerForm.reset();
    /*alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
  }
}

