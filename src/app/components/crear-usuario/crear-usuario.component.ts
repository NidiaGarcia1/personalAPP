import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  nuevo_usuario:Usuario;
  @Output() public setUsuario:EventEmitter<any> = new EventEmitter;

  constructor() {
    this.nuevo_usuario = {}
   }

  ngOnInit(): void {}

  registrarUsuario(){
    let usuario_registro:Usuario = this.nuevo_usuario
    usuario_registro.fecha_registro = new Date()
    usuario_registro.activo = true
    this.setUsuario.emit(usuario_registro)
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.nuevo_usuario={}
  }

}
