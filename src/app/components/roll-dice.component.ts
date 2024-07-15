import { Component, computed, effect, ElementRef, signal, viewChild } from "@angular/core";
import DieComponent from "./die.component";

const faces = ['one', 'two', 'three', 'four', 'five', 'six']

@Component({
    standalone: true,
    selector: 'roll-dice',
    template: `
        <div class="rolldice">
            <div class="rolldice-container">
                <die [face]="die1()" [rolling]="isRolling()" />
                <die [face]="die2()" [rolling]="isRolling()" />
            </div>
            <button (click)="roll()" #rollButton
                [disabled]="buttonDisabled()"
                [class.disabled]="buttonDisabled()"
            >{{buttonTextComputed()}}</button>
        </div>
    `,
    styles: [`
        .rolldice {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1em;
            padding: 1em;
            font-size: 1.5em;
            font-weight: bold;
            color: slateblue;
            flex-flow: column wrap;

            &-container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1em;
            }


            button {
                font-size: 1.25em;
                font-weight: bold;
                color: slateblue;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                border: none;
                background: none;
                outline: none;
                padding: 0.25em;
                border-radius: 0.25em;
                box-shadow: 0 0 0.25em 0.25em rgba(0, 0, 0, 0.1);
                text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.1);
                text-transform: uppercase;
            }

            button[disabled] {
                color: lightgray;
            }

            button:hover {
                color: darkslateblue;
            }
        }    
    `],
    imports: [DieComponent]
})
export default class RollDiceComponent {
    rollButton = viewChild<ElementRef<HTMLButtonElement>>('rollButton');
    isRolling = signal(false);

    die1 = signal('');
    die2 = signal('');

    roll() {
        this.isRolling.set(true)

        this.die1.set(faces[Math.floor(Math.random() * faces.length)])
        this.die2.set(faces[Math.floor(Math.random() * faces.length)])


        setTimeout(() => {
            this.isRolling.set(false)
        }, 2000)
    }

    buttonTextComputed = computed(() => this.isRolling() ? 'Rolling...' : 'Roll Dice')
    buttonDisabled = computed(() => this.isRolling())

    constructor() {
        effect(() => {
            this.die1.set(faces[Math.floor(Math.random() * faces.length)])
            this.die2.set(faces[Math.floor(Math.random() * faces.length)])
        }, {
            allowSignalWrites: true
        })
    
    }
 }