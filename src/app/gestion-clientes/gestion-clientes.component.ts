import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'; // SE AGREGA
import { GestionClientesService } from '../gestion-clientes.service'; // SE AGREGA

@Component({
  selector: 'app-gestion-clientes',
  templateUrl: './gestion-clientes.component.html',
  styleUrls: ['./gestion-clientes.component.css']
})
export class GestionClientesComponent implements OnInit {
  // lo que se haga aqui el html lo interpreta el .component.html
  clientes: any[] = [];
  requestForm!: FormGroup;
  constructor(
    private gestionClientesService: GestionClientesService,
    private formBuilder: FormBuilder
  ) {
    this.requestForm = this.formBuilder.group({
      id:[],
      tipo_identificacion: [],
      numero_identificacion: [],
      primer_nombre: [],
      segundo_nombre: [],
      primer_apellido: [],
      segundoApellido: [],
      correo_electronico: [],
      fecha_Nacimiento: [],
      fecha_Creacion: [],
      fechaModificacion: []
    })
  }
  
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.gestionClientesService.getAll()
      .subscribe((response: any) => {
        this.clientes = response.client; // Assuming response structure is { client: [] }
      })
  }
  SendForm(): void {
    console.log(this.requestForm);
  }
  save() {
    const values = this.requestForm.value;
    console.log('values', values);
    this.gestionClientesService.create(values)
      .subscribe(() => {
        this.getAll();
      })
  }
  delete(id: number) {
    const ok = confirm('¿Estás seguro de eliminar este registro?');
    if (ok) {
      this.gestionClientesService.delete(id)
        .subscribe(() => {
          this.getAll();
        })
      }
    }
  }
  
  

