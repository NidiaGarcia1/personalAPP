import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  @Input() public lista_usuarios:Usuario[];

  constructor() { 
    this.lista_usuarios=[]
  }

  ngOnInit(): void {

  }

}
