import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import RollDiceComponent from "./components/roll-dice.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RollDiceComponent],
  template: `
    <roll-dice />
  `,
  styles: [`
    
  `]
})
export class AppComponent {
  title = `Angular Roll Dice App - ${VERSION.major}`;
}
