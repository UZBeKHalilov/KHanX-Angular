import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';


@Component({
  selector: 'app-root',
  imports: [NavigatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'KHanX';
}
