import { Component } from '@angular/core';

@Component({
  selector: 'app-inc-dec',
  imports: [],
  templateUrl: './inc-dec.html',
  styleUrl: './inc-dec.css',
})
export class IncDec {
 count: number = 0;

 increment() {
   this.count++;
 }
 decrement() {
   if (this.count > 0) {
     this.count--;
   }
 }
  reset() {
    this.count = 0;
  }
}
