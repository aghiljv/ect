import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-sort-pipe',
  templateUrl: './custom-sort-pipe.component.html',
  styleUrls: ['./custom-sort-pipe.component.css']
})
export class CustomSortPipeComponent {
  options = [
    { name: 'C', price: 30 },
    { name: 'A', price: 50 },
    { name: 'T', price: 100 }
  ];
}
