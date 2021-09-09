import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  nuevo_usuario:Usuario;
  @Output() public setUsuario:EventEmitter<any> = new EventEmitter;
  @ViewChild("modalConfirmacion",{static:true}) modalConfirmacion: NgbModalRef;

  constructor(private ngbModal:NgbModal) {
    this.nuevo_usuario = {}
   }

  ngOnInit(): void {}

abrirModalConfirmacionNuevoUsuario(modalConfirmacion:any){
  this.ngbModal.open(modalConfirmacion,{
    centered:true,
    size: "lg",
    scrollable: true,
    backdrop: 'static'
  }).result.then(
    (result) => {
      if(result == 'Save'){
        this.registrarUsuario()
      }
    }, (reason) => {}
  )
}

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
