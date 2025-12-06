import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.css',
})
export class GetSet {
  name: string = '';

  displayname: string = '';

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;

  }

  showname() {
    this.displayname = this.name;
  }
 
  setEvent() {
    this.name = "Angular Developer";
  }
}
