import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../../../interfaces/State';
import { SetActiveWordIndex, SetPhase } from './../../../store/text.actions';

@Component({
  templateUrl: './typer-input.component.html',
  styleUrls: ['./typer-input.component.css'],
  selector: 'typer-input'
})
export class TyperInput {
  activeWordIndex: number;
  activeWord: string = '';
  textToType: string[];

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      this.activeWordIndex = state.activeWordIndex;
      this.textToType = state.textToType;
    });
  }

  changeActiveWord(event) {
    const word = event.target.value;

    if (event.data === ' ') {
      if (this.textToType.length === this.activeWordIndex + 1) {
        this.store.dispatch(new SetPhase('finished'));
      } else if (this.activeWord === this.textToType[this.activeWordIndex]) {
        this.activeWord = '';
        this.store.dispatch(new SetActiveWordIndex(this.activeWordIndex + 1));
      }
    } else {
      this.activeWord = word;
    }
  }
}
