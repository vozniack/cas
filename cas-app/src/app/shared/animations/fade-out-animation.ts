import {animate, style, transition, trigger} from "@angular/animations";

export const fadeOutAnimation = trigger('fadeOutAnimation', [
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate('0.2s linear', style({
      opacity: 0
    }))
  ])
]);
