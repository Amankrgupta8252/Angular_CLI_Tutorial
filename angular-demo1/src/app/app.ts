import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';
// import { Login } from './login/login';
// import { Signup } from './signup/signup';
import { IncDec } from './inc-dec/inc-dec';
import { IncDecDemo1 } from './inc-dec-demo1/inc-dec-demo1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncDec, IncDecDemo1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-demo1');
}
