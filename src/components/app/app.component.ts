import { Component, OnInit } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../interfaces/State';
import { SetTextToType } from './../../store/text.actions';

// Mock text
// TODO: change to api based
import { mockText } from './../../mockText';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  typerInProgress: boolean;

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      this.typerInProgress = state.typerInProgress;
    });
  }

  ngOnInit() {
    this.store.dispatch(new SetTextToType(mockText.split(' ')));
  }
}
