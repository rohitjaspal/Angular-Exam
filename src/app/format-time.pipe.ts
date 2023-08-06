import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
      return (
        ('000' + minutes).slice(-3) +
        ':' +
        ('000' + Math.floor(value - minutes * 60)).slice(-2)
      );
  }
}
