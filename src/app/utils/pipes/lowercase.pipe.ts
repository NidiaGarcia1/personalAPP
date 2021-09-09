import { Pipe, PipeTransform } from '@angular/core';
import { textSpanOverlap } from 'typescript';

@Pipe({
  name: 'lowerCase'
})
export class LowercasePipe implements PipeTransform {

  transform(texto:any): unknown {
    if(texto){
      return texto.toLowerCase()
    }else{
      return texto
    }
  }

}
