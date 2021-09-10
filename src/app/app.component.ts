import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './interfaces/usuario';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { UsuarioServiceService } from './services/usuario-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit{
 
  lista_usuarios:Usuario[]

  usuarios_firestore:any[]

   constructor(private ngbModal:NgbModal, private usuario_service: UsuarioServiceService){
      this.usuarios_firestore = []
  }

  ngOnInit(){
    //llamando al metodo listar usuarios (de tipo observable)
    //mediante el subscribe accedemos a la colección de datos recuperada desde la bd
    this.usuario_service.listarUsuario().subscribe((usuarios)=>{
      this.usuarios_firestore = usuarios
    })
  }
  ngAfterViewInit(){}

  mostrarModalNuevousuario(modalNuevoUsuario:any){
    this.ngbModal.open(modalNuevoUsuario,{
      centered:true,
      size:"lg",
      scrollable: true,
      backdrop: 'static'
    }).result.then(
      (result) => {},
      (reason) => {}
    )
  }

 recibirUsuario(usuario:Usuario){
   this.lista_usuarios.push(usuario);
   this.ngbModal.dismissAll()
 }
}
