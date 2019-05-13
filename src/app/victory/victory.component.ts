import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../interfaces/State';

@Component({
  templateUrl: './victory.component.html',
  styleUrls: ['./victory.component.css'],
  selector: 'victory'
})
export class Victory {
  constructor(private store: Store<State>) {}
}
