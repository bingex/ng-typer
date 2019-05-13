import { Component } from '@angular/core';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './../interfaces/State';
import { SetTimePassed } from './../store/text.actions';

@Component({
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  selector: 'timer'
})
export class Timer {
  seconds: number = 0;
  minutes: number = 0;
  timeInSeconds: number = 0;
  timeString: string = '00:00';
  _timer: any;

  constructor(private store: Store<State>) {
    store.select('textReducer').subscribe((state: State) => {
      if (state.phase === 'started') {
        if (!this._timer) this.startTimer();
      } else {
        this.stopTimer();
      }
    });
  }

  startTimer() {
    this._timer = setInterval(() => {
      this.timeInSeconds++;
      this.seconds++;

      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes >= 60) this.minutes = 0;
      }

      this.timeString = `${
        this.minutes
          ? this.minutes > 9
            ? this.minutes
            : `0${this.minutes}`
          : '00'
      }:${this.seconds > 9 ? this.seconds : '0' + this.seconds}`;

      this.store.dispatch(new SetTimePassed(this.timeInSeconds));
    }, 1000);
  }

  stopTimer() {
    this.timeString = '00:00';
    clearTimeout(this._timer);
  }
}
