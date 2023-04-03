import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[], args: any): any[] {
    //if no arguments, return the array as is
    if (!items || !args) {
      return items;
    }

    //if the type of args is string, the argument is just one
    if (typeof args === 'string') {
      const props = args.split('-');
      const propName = props[1] === undefined ? props[0] : props[1];
      const sortOrder = props[1] === undefined ? 'asc' : 'desc';

      itemsSort(items, propName, sortOrder);
    }

    //if the type of args is array, the argument is more than one
    //we need to iterate through all
    if (Array.isArray(args)) {
      for (let i = 0; i < args.length; i++) {
        const props = args[i].split('-');
        const propName = props[1] === undefined ? props[0] : props[1];
        const sortOrder = props[1] === undefined ? 'asc' : 'desc';

        itemsSort(items, propName, sortOrder);
      }
    }

    function itemsSort(items: any[], propName: any, sortOrder: any) {
      items.sort((a, b) => {
        if (sortOrder === 'desc') {
          return typeof b[propName] === 'number'
            ? b[propName] - a[propName]
            : b[propName].toString().localeCompare(a[propName].toString());
        } else {
          return typeof b[propName] === 'number'
            ? a[propName] - b[propName]
            : a[propName].toString().localeCompare(b[propName].toString());
        }
      });
    }

    return items;
  }
}
