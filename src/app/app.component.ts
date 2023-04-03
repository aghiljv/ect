import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ect';
  options = [
    { name: 'B', price: 5 },
    { name: 'A', price: 10 },
    { name: 'C', price: 118 },
  ];
}
