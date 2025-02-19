import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sQUARE'
})
export class SQUAREPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
   const  [a] = args;
   return value * a;
    // return value * value * value;
  }

}
