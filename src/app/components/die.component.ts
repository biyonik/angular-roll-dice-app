import { Component, computed, input, InputSignal } from "@angular/core";

@Component({
    standalone: true,
    selector: 'die',
    template: `
        <i [class]="dice()"></i>
    `,
    styles: [`
        i {
            font-size: 10em;
            padding: 0.25em;
            color: slateblue;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }    
    `]
})
export default class DieComponent { 
    face: InputSignal<string> = input<string>('')

    dice = computed(() => 'fas fa-dice-' + this.face())
}