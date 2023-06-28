import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generateArray',
  standalone: true
})
export class GenerateArrayPipe implements PipeTransform {

  transform(size:number): number[] {
    if (size <= 0) return []
    return new Array(size);
  }

}
