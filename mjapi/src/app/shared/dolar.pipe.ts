import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dolar'
})
export class DolarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value + '$';
  }

}
