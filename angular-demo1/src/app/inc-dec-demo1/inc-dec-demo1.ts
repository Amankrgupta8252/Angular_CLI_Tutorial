import { Component } from '@angular/core';

@Component({
  selector: 'app-inc-dec-demo1',
  imports: [],
  templateUrl: './inc-dec-demo1.html',
  styleUrl: './inc-dec-demo1.css',
})
export class IncDecDemo1 {
  count: number = 0;
  event_handling(val: string) {
    if (val === 'increment') {
      this.count++;
    }
    else if (val === 'decrement') {
      if (this.count > 0) {
        this.count--;
      }
    }
    else  {
      this.count = 0;
    }
  }
}
