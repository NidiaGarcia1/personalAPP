import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform( texto:any): string {
    if(texto){
      return texto.toUpperCase();
    }
    else{
      return texto
    }

  }

}
