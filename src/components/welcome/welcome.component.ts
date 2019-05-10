import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../interfaces/State';
import { StartType } from './../../store/text.actions';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  selector: 'welcome'
})
export class Welcome {
  constructor(private store: Store<State>) {}

  startTyper() {
    this.store.dispatch(new StartType(true));
  }
}
