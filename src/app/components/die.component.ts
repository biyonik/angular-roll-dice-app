import { Component, computed, input, InputSignal } from "@angular/core";

@Component({
    standalone: true,
    selector: 'die',
    template: `
        <i [class]="dice()" [class.rolling]="rolling()"></i>
    `,
    styles: [`
        i {
            font-size: 10em;
            padding: 0.25em;
            color: slateblue;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }    

        .rolling {
            animation-name: wobble;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-play-state: running;
        }

        @keyframes wobble {
            from {
                transform: translate3d(0, 0, 0);
            }

            15% {
                transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
            }

            30% {
                transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
            }

            45% {
                transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
            }

            60% {
                transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
            }

            75% {
                transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
            }

            to {
                transform: translate3d(0, 0, 0);
            }
        }
    `]
})
export default class DieComponent { 
    face: InputSignal<string> = input<string>('')
    rolling: InputSignal<boolean> = input<boolean>(false)

    dice = computed(() => 'fas fa-dice-' + this.face())
}