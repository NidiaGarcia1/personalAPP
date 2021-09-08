import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { UpperCasePipe } from './utils/pipes/upper-case.pipe';
import { HighLigthDirective } from './utils/directives/high-ligth.directive';

@NgModule({
  declarations: [
    AppComponent,
    CrearUsuarioComponent,
    ListarUsuariosComponent,
    UpperCasePipe,
    HighLigthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
