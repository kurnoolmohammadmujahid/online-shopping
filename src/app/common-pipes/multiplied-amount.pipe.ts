import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'MultipliedAmount'
})

export class MultipliedAmountPipe implements PipeTransform {
    transform(value: number, multiply: string): number {
        let mul = parseFloat(multiply);
        return mul * value
    }
} 