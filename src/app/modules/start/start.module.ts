// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { Welcome } from './welcome/welcome.component';

@NgModule({
  declarations: [Welcome],
  imports: [CommonModule],
  exports: [Welcome],
  providers: []
})
export class StartModule {}
