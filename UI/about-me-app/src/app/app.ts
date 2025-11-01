// UI\about-me-app2\src\app\app.ts
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Profile} from './components/profile/profile';
import {TextareaButtonComponent} from './components/spartan/textarea-button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Profile,TextareaButtonComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('about-me-app2');
}
