import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { initializeApp } from "firebase/app";
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  //Variable con el nombre de la colección
  coleccion:string = 'usuarios'
  //se llama al servicio de Angular Firestore
  //dentro del constructor, ya que es de tipo
  //servicio
  constructor(private afs: AngularFirestore) { 
  }

  //Metodo de tipo observable que esta escuchando
  //los cambios que existan en la colección de usuarios
  listarUsuario(){
    return this.afs.collection(this.coleccion).valueChanges()
  }
  //Metodos que acceden al documento por el ID y setea un objeto en ese documento
  agregarUsuario(usuario:Usuario){
    //coleccion = usuarios/1
    usuario.usuario_id = this.agregarIdUsuario(usuario)
    return this.afs.doc(this.coleccion+'/'+usuario.usuario_id).set(usuario)
  }

  //Metodos que acceden al documento por el ID y actualiza todo el objeto en ese documento
  editarUsuario(usuario:Usuario){
    return this.afs.doc(this.coleccion+'/'+usuario.usuario_id).update(usuario)
  }

  //Metodo que elimina el documento con el ID proporcionado en la colección
  eliminarusuario(usuario_id){
    return this.afs.doc(this.coleccion+'/'+usuario_id).delete()
  }
  agregarIdUsuario(usuario:Usuario){
    let fecha_actual_ms = new Date().getTime().toString()
    let letra_nombre = usuario.nombre.substring(0,1)
    let letra_ap_paterno = usuario.apellido_paterno.substring(0,1)
    let letra_ap_materno = usuario.apellido_materno.substring(0,1)
  
    return fecha_actual_ms + letra_nombre + letra_ap_paterno + letra_ap_materno;
  }  
}


