import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Clientes } from './clientes';
import { Unidad } from './unidad';

export interface IDataItem {
  name: string,
  description: string,
  price: number
}
@Injectable()


export class dataService {

	constructor(private http: Http) {}
	
	private headers = new Headers({'Content-Type': 'application/json'});

		
		getClientes(): Promise<Clientes[]> {
			return this.http.get('http://localhost:8000/cliente?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Clientes[])
		}


/*

		agregaClientes(): Promise<any> {
			return this.http.post('http://localhost:8000/cliente', {headers: this.headers})
				.toPromise()
				.then(this.extractData)
		}
*/
		agregaClientes(user: Clientes) {
			
			console.log(user);
			return this.http.post('http://localhost:8000/cliente', user, {headers: this.headers})
			.toPromise()
			
		}
/*		
		private extractData(res: Response) {
			let body = res.json();
			console.log(body);
				return body || {};
			}
		}
*/

		deleteCliente(id: number): Promise<void> {
			
			const url = `${"http://localhost:8000/cliente"}/${id}`;
			console.log(url);
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}


		getUnidad(): Promise<Unidad[]> {
			return this.http.get('http://localhost:8000/unidad?format=json', {headers: this.headers})
				.toPromise()
				.then(response => response.json() as Unidad[])
		}
		
		/*
		getUnidad(): Promise<Unidad[]> {
			return this.http.get('http://localhost:8000/unidad?format=json').toPromise()
				.then(this.extractData)
				.catch(this.handleErrorPromise);

			}


		private extractData(res: Response) {
			let body = res.json();
        	return body;
    	}
		*/
		private handleErrorPromise (error: Response | any) {
			console.error(error.message || error);
			return Promise.reject(error.message || error);
    		}	

		deleteDeposito(id: number): Promise<void> {
			const url = `${"http://localhost:8000/deposito"}/${id}`;
			return this.http.delete(url, {headers: this.headers})
				.toPromise()
				.then(() => null)
		}
}