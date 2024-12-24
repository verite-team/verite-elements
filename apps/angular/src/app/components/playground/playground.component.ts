import { Component } from '@angular/core'
import { VuiButton } from '../stencil-generated/components'
@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [VuiButton],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {}
