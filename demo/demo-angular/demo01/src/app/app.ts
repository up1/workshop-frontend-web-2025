import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/**
 * Root component
 * @class App
 * @description The root component of the application.
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
// Signal property
// dfsdsd
  protected readonly title = signal('demo01'); // NOSONAR
}
