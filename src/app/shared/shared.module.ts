// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { YesNoModalComponent } from './components/yes-no-modal/yes-no-modal.component';

// Installed modules
// Custom components
// Pipes
// Installed pipes
// Custom pipes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    YesNoModalComponent
    // Custom components
    //ScrollProgressBarComponent,
    // pipes
    // Custom pipes
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    YesNoModalComponent,
    //Custom components
    //ScrollProgressBarComponent,
    // Installed pipes
    // Custom pipes
  ]
})
export class SharedModule {}
