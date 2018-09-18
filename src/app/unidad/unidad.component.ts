import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {MatTableDataSource, MatTabsModule} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.scss']
})
export class UnidadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}