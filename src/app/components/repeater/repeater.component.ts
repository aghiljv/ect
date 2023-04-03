import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css'],
})
export class RepeaterComponent {
  @Input() data: any[];
  @Input() template: any;
}
