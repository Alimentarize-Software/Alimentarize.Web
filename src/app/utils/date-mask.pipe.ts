import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateMask',
})
export class DateMaskPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    value = value.replace(/\D/g, '');

    if (value.length !== 8) return value;

    return value.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  }
}
