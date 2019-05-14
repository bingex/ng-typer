import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../../interfaces/State';

@Component({
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.css'],
  selector: 'victory'
})
export class Victory {
  timePassed: number = 0;
  speed: number = 0;
  count: number = 0;

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      this.timePassed = state.timePassed;
      this.count = state.textToType.length;
      if (state.timePassed) {
        this.speed = Math.round(
          ((state.activeWordIndex + 1) * 60) / state.timePassed
        );
      }
    });
  }
}
