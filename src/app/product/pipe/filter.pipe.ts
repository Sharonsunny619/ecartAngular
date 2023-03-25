import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString:string,PropName:string):any {
    const result:any=[]
    if(!value || filterString ==" "|| PropName==" "){
      return value
    }
    value.forEach((item:any)=>{
      if(item[PropName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(item)
      }
    })
    return result
  }

}
