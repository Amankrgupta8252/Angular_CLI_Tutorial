import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetSet } from './get-set/get-set';
import { IfElse } from './if-else/if-else';
import { ElseIf } from './else-if/else-if';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetSet, IfElse, ElseIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_demo2');
}
