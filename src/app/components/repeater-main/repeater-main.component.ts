import { Component } from '@angular/core';

@Component({
  selector: 'app-repeater-main',
  templateUrl: './repeater-main.component.html',
  styleUrls: ['./repeater-main.component.css'],
})
export class RepeaterMainComponent {
  data = [
    { name: 'A' },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'T' },
  ];
}
