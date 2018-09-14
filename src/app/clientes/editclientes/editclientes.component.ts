import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource, MatSort, MatTabsModule, MatPaginator, MatDialog } from '@angular/material';
import { SelectionModel} from '@angular/cdk/collections';
import { Clientes } from './../../dataservice/clientes';
import { dataService } from './../../dataservice/data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


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
      private dataService: dataService) { }

    ngOnInit() {
/*
      this.promisclientes = this.dataService.getClientesid(id);
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
        //this.dataService.agregaClientes(this.registerForm.value);
        console.log("Form edit!");
       // this.registerForm.reset();
        /*alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))*/
    }
}

