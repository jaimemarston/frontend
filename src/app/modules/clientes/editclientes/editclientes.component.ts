import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clientes } from '../../../dataservice/clientes';
import { DataService } from '../../../dataservice/data.service';


@Component({
  selector: 'app-editclientes',
  templateUrl: './editclientes.component.html',
  styleUrls: ['./editclientes.component.scss']
})

export class EditClientesComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    promisclientes: Promise<Clientes[]>
    clientes: Clientes[];
    errorMessage: String;


    constructor(
      private formBuilder: FormBuilder,
      private dataService: DataService) { }

    ngOnInit() {}
/*
      this.promisclientes = this.DataService.getClientesid(id);
      this.promisclientes.then(
      clientes => this.clientes = clientes,
      error => this.errorMessage = <any>error);


        this.registerForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            codigo: ['', Validators.required]
        });
    }
*/
    // convenience getter for easy access to form fields
   // get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // Graba info registrada en formulario
        //this.DataService.agregaClientes(this.registerForm.value);
        console.log("Form edit!");
       // this.registerForm.reset();
        /*alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
    }
}

