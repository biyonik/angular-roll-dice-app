import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DieComponent from "./components/die.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DieComponent],
  template: `
    <die [face]="'one'" />
  `,
  styles: [`
    
  `]
})
export class AppComponent {
  title = `Angular Roll Dice App - ${VERSION.major}`;
}
