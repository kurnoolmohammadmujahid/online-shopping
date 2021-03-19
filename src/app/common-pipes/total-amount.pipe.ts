import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'TotalAmount'
})

export class TotalAmountPipe implements PipeTransform {
    transform(value: any, args?: any) : any {
        // setTimeout(() => {
        let total = 0;
        for (let i in value) {
            total += value[i];
        }
        return total;
        // }, 2000);
    }
} 