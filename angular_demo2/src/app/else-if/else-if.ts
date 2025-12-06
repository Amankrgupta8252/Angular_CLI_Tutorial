import { Component } from '@angular/core';

@Component({
  selector: 'app-else-if',
  imports: [],
  templateUrl: './else-if.html',
  styleUrl: './else-if.css',
})
export class ElseIf {
  color = 1;

  handaleColor(val: number) {
    this.color = val;
  }
  handaleInput(event: Event) {
    this.color = parseInt((event.target as HTMLInputElement).value)
  }
}
