import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../interfaces/State';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  typerInProgress: boolean;

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      this.typerInProgress = state.typerInProgress;
    });
  }
}
