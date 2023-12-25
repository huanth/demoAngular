import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'softArray',
})
export class SoftPipe implements PipeTransform {

  transform(value: Array<number>, args?: any): any {
    console.log(value, args);
    if (value.length === 0) {
      return 'Array is empty';
    } else {
      if (args === 'asc') {
        return [...value].sort((a, b) => a - b);
      } else if (args === 'desc') {
        return [...value].sort((a, b) => b - a);
      } else {
        return value;
      }
    }
  }

}