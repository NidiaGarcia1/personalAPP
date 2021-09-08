import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit, OnDestroy{
  usuario: any = [];

  constructor(){
    this.usuario = {
      nombre: 'Cesar',
      apellido: 'Gonzalez',
      nacionalidad: 'peruano',
    };
    let usuario_temp = JSON.parse(JSON.stringify(this.usuario));
    console.log("Constructor", usuario_temp);
  }

  ngOnInit(){
    this.usuario.nombre = 'Carlos'
    let usuario_temp = JSON.parse(JSON.stringify(this.usuario));
    console.log("OnInit", this.usuario);
  }

  ngAfterViewInit(){
    this.usuario.nombre = 'Ricardo'    
    let usuario_temp = JSON.parse(JSON.stringify(this.usuario));
    console.log('ViewInit', this.usuario);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
  }
}
