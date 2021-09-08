import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighLigth]',
  host:{
    style: 'display:none'
  }
})
export class HighLigthDirective {

  constructor() { }

}
