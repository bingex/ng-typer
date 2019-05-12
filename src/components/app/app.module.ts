// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Components
import { AppComponent } from './app.component';
import { Welcome } from './../welcome/welcome.component';
import { TyperText } from './../typer-text/typer-text.component';
import { TyperInput } from './../typer-input/typer-input.component';
import { Timer } from './../timer/timer.component';
import { TypeSpeed } from './../type-speed/type-speed.component';

// Reducers
import { textReducer } from './../../store/text.reducer';

@NgModule({
  declarations: [
    AppComponent,
    Welcome,
    TyperText,
    TyperInput,
    Timer,
    TypeSpeed
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ textReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
