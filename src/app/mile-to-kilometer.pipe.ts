import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mileToKilometer'
})
export class MileToKilometerPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (args[0] === 'm') {
      return value * 1.609344 * 1000;
    } else {
      return value * 1.609344
    }
  }

}
