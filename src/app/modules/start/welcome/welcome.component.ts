import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State, PhaseTypes } from './../../../interfaces/State';
import { SetPhase } from './../../../store/text.actions';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  selector: 'welcome'
})
export class Welcome {
  constructor(private store: Store<State>) {}

  startTyper() {
    this.store.dispatch(new SetPhase(PhaseTypes.started));
  }
}
