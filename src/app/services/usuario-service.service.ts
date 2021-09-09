import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Usuario } from '../interfaces/usuario';

const firebaseConfig = {
  apiKey: "AIzaSyDWh0s_wDhwoL2FjGovZ0eDSKsaNveDC3I",
  authDomain: "my-appgen.firebaseapp.com",
  projectId: "my-appgen",
  storageBucket: "my-appgen.appspot.com",
  messagingSenderId: "1077620399336",
  appId: "1:1077620399336:web:9007a0b38b02ed54827d5d"
};

const firebase = require("firebase");
require("firebase/firestore");
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  db:any
  constructor() { 
    firebase.initializeApp(firebaseConfig);
    //this.app = initializeApp(firebaseConfig);
    this.db = firebase.firestore();
  }

  agregarUsuario(){
    let nuevo_usuario: Usuario = {
      nombre: 'Cesar',
      apellido_paterno: 'Alvarez',
      apellido_materno: 'Florez',
      activo: true,
      edad:35,
      fecha_registro: new Date()
    }
    this.db.collection("usuarios").add(nuevo_usuario)
    .then((docRef) =>{
      console.log("Documento Insertado con el ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Error añadiendo el documento:", error)
    });
  }
}


