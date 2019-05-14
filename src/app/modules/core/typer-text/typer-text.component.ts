import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../../interfaces/State';

@Component({
  selector: 'typer-text',
  templateUrl: './typer-text.component.html',
  styleUrls: ['./typer-text.component.css']
})
export class TyperText {
  activeWordIndex: number;
  textToType: string[];

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      this.activeWordIndex = state.activeWordIndex;
      this.textToType = state.textToType;
    });
  }
}
