import { Component } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-switch-statement',
  imports: [],
  templateUrl: './switch-statement.html',
  styleUrl: './switch-statement.css',
})
export class SwitchStatement {
  color: string = 'red';

  handaleColor(value: string) {
    this.color = value;
  }
  handaleTextColor(event: any) {
    this.color = (event.target as HTMLInputElement).value;
  }

}
