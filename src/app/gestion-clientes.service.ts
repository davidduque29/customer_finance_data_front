import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // se agrega porque necesito HTTP


@Injectable({
  providedIn: 'root'
})
export class GestionClientesService {

  constructor(private http: HttpClient) {
    // Creamos todos los métodos a partir de las URL expuestas por el backend
  }

  // Obtiene todos los clientes
  getAll() {
    return this.http.get<any>('http://localhost:8080/financesbucket/listcustomers');
  }

  // Crea un nuevo cliente
  create(customer: any) {
    return this.http.post('http://localhost:8080/financesbucket/createcustomer', customer);
  }

  // Actualiza un cliente existente por su ID
  update(id: number, customer: any) {
    return this.http.put(`http://localhost:8080/financesbucket/updatecostumer/${id}`, customer);
  }

  // Elimina un cliente por su ID
  delete(id: number) {
    return this.http.delete(`http://localhost:8080/financesbucket/deletecustomer/${id}`);
  }
}