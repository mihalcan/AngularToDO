import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(done: boolean, args?: any): string {
    return done ? 'Well Done!!!' : 'Keep working';
  }

}
