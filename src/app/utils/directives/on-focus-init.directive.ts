import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnFocusInit]'
})
export class OnFocusInitDirective {

  constructor(private elemento:ElementRef) 
  {

   }

   ngAfterViewInit(){
     this.elemento.nativeElement.focus();
   }

}
