import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  display = false;
  divshow1 = true;
  Show() {
    this.display= true;
  }
  heid() {
    this.display= false;
  }
  toggal() {
    this.display = !this.display;
  }
  divshow() {
    this.divshow1 = !this.divshow1;
  }
}
