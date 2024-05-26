import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    value = value.replace(/\D/g, '');

    if (value.length !== 11) return value;

    return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}
