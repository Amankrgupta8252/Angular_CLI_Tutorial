import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetSet } from './get-set/get-set';
import { IfElse } from './if-else/if-else';
import { ElseIf } from './else-if/else-if';
import { SwitchStatement } from './switch-statement/switch-statement';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GetSet, IfElse, ElseIf, SwitchStatement],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_demo2');
}
