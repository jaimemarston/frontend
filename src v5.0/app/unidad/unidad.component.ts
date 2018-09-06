import { Component, OnInit } from '@angular/core';
import { dataService } from './../dataservice/data.service';
import { Unidad } from './../dataservice/unidad';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.scss']
})


export class UnidadComponent implements OnInit {
  

  promiseunidades: Promise<Unidad[]>
	unidades: Unidad[];
  errorMessage: String;
 
  constructor(private dataService: dataService) { }

   ngOnInit(): void {
    this.promiseunidades = this.dataService.getUnidad();
    this.promiseunidades.then(
      unidades => this.unidades = unidades,
      error => this.errorMessage = <any>error);
  }
 
}