import { Pipe, PipeTransform } from '@angular/core';
import { NgModel } from '@angular/forms';


interface Month{
  [key:number]:string
}
@Pipe({
  name: 'filterdate'
})

export class FilterdatePipe implements PipeTransform {
  private readonly months:Month = {
    1: 'enero',
  2: 'febrero',
  3: 'marzo',
  4: 'abril',
  5: 'mayo',
  6: 'junio',
  7: 'julio',
  8: 'agosto',
  9: 'septiembre',
  10: 'octubre',
  11: 'noviembre',
  12: 'diciembre'
  };
  
  transform(date: string|undefined ): string {
    console.log(date);
    
    const numbersOfTheDate=date?.split('-') 

   console.log(numbersOfTheDate?[0]:'')

    const textDate= `${numbersOfTheDate?[2]:''} de ${this.getMonth(numbersOfTheDate?[1].toString():'')} de
     ${numbersOfTheDate?[0]:''}`
     
    return textDate
    
   }
   private getMonth(month:string|undefined):string{
    const index=Number(month)
    return this.months[index]
   }

}
