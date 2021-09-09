import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit{
 
  lista_usuarios:Usuario[]

   constructor(private ngbModal:NgbModal){
    this.lista_usuarios = [];
  }

  ngOnInit(){}
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
