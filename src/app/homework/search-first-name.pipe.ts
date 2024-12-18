import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './homework.component';

@Pipe({
  name: 'searchFirstName'
})
export class SearchFirstNamePipe implements PipeTransform {

  transform(arr: Users[], pointer: string, group: string): Users[] {
    if(!arr) return [];
    if(!pointer) return arr;
    if(!group) return arr;
    let arrModify = [...arr];
    let indexObj: keyof Users;
    if(group === 'phone'){
      indexObj = 'phone';
      let aModify: number;
      let bModify: number;
      if(pointer === 'abc'){
        arrModify.sort((a, b) => {
          aModify = +a[indexObj];
          bModify = +b[indexObj];
          return aModify > bModify ? 1 : aModify < bModify ? -1: 0;
        });
        arr.forEach((item, i) => arr[i] = arrModify[i]);
        return arr;
      }
      else if(pointer === 'zyx'){
        arrModify.sort((a, b) => {
          aModify = +a[indexObj];
          bModify = +b[indexObj];
          return aModify < bModify ? 1 : aModify > bModify ? -1: 0;
        });
        arr.forEach((item, i) => arr[i] = arrModify[i]);
        return arr;
      }
      return arr;
    }
    else{
      if(group === 'last'){
        indexObj = 'lastName';
      }
      if(group === 'first'){
        indexObj = 'firstName';
      }
      if(pointer === 'abc'){
        arrModify.sort((a, b) => a[indexObj].toLowerCase().localeCompare(b[indexObj].toLowerCase()));
        arr.forEach((item, i) => arr[i] = arrModify[i]);
        return arr;
      }
      else if(pointer === 'zyx'){
        arrModify.sort((a, b) => b[indexObj].toLowerCase().localeCompare(a[indexObj].toLowerCase()));
        arr.forEach((item, i) => arr[i] = arrModify[i]);
        return arr;
      }
      return arr;
    }
  }

}
