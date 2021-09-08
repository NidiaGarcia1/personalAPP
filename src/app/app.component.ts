import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit{
  usuario: any;
  lista_roles : any[]
  @ViewChild("div_body",{static: true}) body: ElementRef;

  constructor(elementRef:ElementRef){
    this.body = elementRef;
    this.lista_roles = []
    this.addRol("Administrador");
    this.addRol("Certificador");//estas son las primeras lineas
    this.addRol("Operador");//estas son las primeras lineas
    this.addRol("Cliente");//estas son las primeras lineas
    console.log("this.lista_roles",this.lista_roles)
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

    console.log("this.body",this.body);
  }

 imprimirUsuario(){
   alert(this.usuario.nombre)
 }

 addRol(rol:string){
   this.lista_roles.push(rol)
 }
}
