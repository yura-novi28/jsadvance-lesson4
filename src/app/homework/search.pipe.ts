import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './homework.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Users[], field: string): Users[] {
    if(!arr) return [];
    if(!field) return arr;
    return arr.filter((item) => {
      if(item.firstName.toLowerCase().includes(field.toLowerCase())){
        return true;
      }
      else if(item.lastName.toLowerCase().includes(field.toLowerCase())) return true;
      else if(item.phone.toLowerCase().includes(field.toLocaleLowerCase())) return true;
      else return false
    })
  }

}
