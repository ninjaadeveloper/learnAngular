import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pKRDOLLAR'
})
export class PKRDOLLARPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
   return value * 280;
    // return null;
  }

}
