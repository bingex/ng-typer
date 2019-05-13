import { Component, OnInit } from '@angular/core';
import { NgTyperService } from './ng-typer.service';

// State management
import { Store, select } from '@ngrx/store';
import { State } from './interfaces/State';
import { SetTextToType } from './store/text.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  phase: string;

  constructor(
    private store: Store<State>,
    private ngTyperService: NgTyperService
  ) {
    store.select('textReducer').subscribe((state: State) => {
      this.phase = state.phase;
    });
  }

  ngOnInit() {
    this.ngTyperService.getTextToType().subscribe(response => {
      this.setTextToType(response);
    });
  }

  setTextToType(text) {
    this.store.dispatch(new SetTextToType(text.split(' ')));
  }
}
