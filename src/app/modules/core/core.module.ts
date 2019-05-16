// Modules
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Components
import { TyperText } from './typer-text/typer-text.component';
import { TyperInput } from './typer-input/typer-input.component';
import { Timer } from './timer/timer.component';
import { TypeSpeed } from './type-speed/type-speed.component';
import { KeyPressed } from './key-pressed/key-pressed.component';

// Directives
import { FocusOnShowDirective } from './../../directives/FocusOnShowDirective';

@NgModule({
  declarations: [
    TyperText,
    TyperInput,
    Timer,
    TypeSpeed,
    KeyPressed,
    FocusOnShowDirective
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [TyperText, TyperInput, Timer, TypeSpeed, KeyPressed],
  providers: []
})
export class CoreModule {}
