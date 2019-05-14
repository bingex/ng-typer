// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { Victory } from './victory/victory.component';

@NgModule({
  declarations: [Victory],
  imports: [CommonModule],
  exports: [Victory],
  providers: []
})
export class FinishModule {}
