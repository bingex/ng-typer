// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StartModule } from './modules/start/start.module';
import { CoreModule } from './modules/core/core.module';
import { FinishModule } from './modules/finish/finish.module';

// Components
import { AppComponent } from './app.component';

// Reducers
import { textReducer } from './store/text.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ textReducer }),
    StoreDevtoolsModule.instrument(),
    StartModule,
    CoreModule,
    FinishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
