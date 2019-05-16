import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../../interfaces/State';

@Component({
  selector: 'key-pressed',
  templateUrl: './key-pressed.component.html',
  styleUrls: ['./key-pressed.component.css']
})
export class KeyPressed {
  keyPressed: string = '';

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      this.keyPressed = state.keyPressed;
    });
  }
}
