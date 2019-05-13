import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../interfaces/State';

@Component({
  templateUrl: './type-speed.component.html',
  styleUrls: ['./type-speed.component.css'],
  selector: 'type-speed'
})
export class TypeSpeed {
  speed: number = 0;

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      if (state.timePassed)
        this.speed = Math.round(
          ((state.activeWordIndex + 1) * 60) / state.timePassed
        );
    });
  }
}
