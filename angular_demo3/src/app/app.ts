import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForLoop } from './for-loop/for-loop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForLoop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_demo3');
}
