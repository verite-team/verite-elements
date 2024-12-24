import { Component } from '@angular/core'
import { PlaygroundComponent } from './components/playground/playground.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlaygroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular'
}
