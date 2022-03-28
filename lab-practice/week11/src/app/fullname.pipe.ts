import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(first: string, second: string): string {
    return `${second} ${first}`;
  }

}
