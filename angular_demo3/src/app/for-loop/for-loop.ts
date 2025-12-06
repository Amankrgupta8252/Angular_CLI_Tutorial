import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  protected readonly users: string[] = ['Alice', 'Bob', 'Charlie', 'Diana'];

  students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Jim', age: 21 },
    { name: 'Jill', age: 23 },
    { name: 'Jack', age: 24 },
    { name: 'Jenny', age: 22 },
    { name: 'Joe', age: 20 },
    { name: 'Jess', age: 21 },
  ];

  GetAge(age: number): void {
    alert(`Student Age: ${age}`);
  }

}
