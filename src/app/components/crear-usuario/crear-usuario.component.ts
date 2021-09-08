import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  nuevo_usuario:Usuario;

  constructor() {
    this.nuevo_usuario = {nombre:'Cesar'
    ,apellido_paterno:'Hernandez'
    ,apellido_materno:'Baca'
    ,activo:true,edad:26}
   }

  ngOnInit(): void {

  }

}
