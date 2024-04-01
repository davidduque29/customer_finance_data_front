import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // se agrega porque necesito HTTP


@Injectable({
  providedIn: 'root'
})
export class GestionClientesService {

  constructor(private http: HttpClient
    ) { }// creamos todos los metodos a partir de las url expuestas por el back
    getAll(){ // se crea para obtener los datos
    return this.http.get<any>('http://localhost:8080/quickfinances/listcustomers');
    }
    create(customer:any){
      return this.http.post('http://localhost:8080/quickfinances/createcustomer',customer);
    }
    update(id:number, customer:any){
      return this.http.put('http://localhost:8080/quickfinances/updatecostumer/'+id,customer);
    }
    delete(id:number){
      return this.http.delete('http://localhost:8080/quickfinances/deletecustomer/'+id);
    }
  }

