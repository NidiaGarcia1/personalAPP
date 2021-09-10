import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  nuevo_usuario:Usuario;
  @Output() public setUsuario:EventEmitter<any> = new EventEmitter;
  @ViewChild("modalConfirmacion",{static:true}) modalConfirmacion: NgbModalRef;

  constructor(private ngbModal:NgbModal, private usuario_service:UsuarioServiceService) {
    this.nuevo_usuario = {}
   }

  ngOnInit(): void {}

agregarUsuario(){
 this.usuario_service.agregarUsuario(this.nuevo_usuario)
}
//editarUsuario(){}
//eliminarUsuario(){}

abrirModalConfirmacionNuevoUsuario(modalConfirmacion:any){
  this.ngbModal.open(modalConfirmacion,{
    centered:true,
    size: "lg",
    scrollable: true,
    backdrop: 'static'
  }).result.then(
    (result) => {
      if(result == 'Save'){
        this.agregarUsuario()
      }
    }, (reason) => {}
  )
}

//DEPRECATED
abrirModalPruebaConfirmacion(){
  this.ngbModal.open(this.modalConfirmacion,{
    centered:true,
    size: "lg",
    scrollable: true,
    backdrop: 'static'
  }).result.then(
    (result) => {
      if(result == 'Save'){
        this.registrarUsuario()
      }
    },
    (reason) => {}
  )  
}

//DEPRECATED
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
