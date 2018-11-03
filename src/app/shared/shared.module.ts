import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvlDatetimePickerComponent } from './avl-datetime-picker/avl-datetime-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [AvlDatetimePickerComponent],
  exports: [AvlDatetimePickerComponent]
})
export class SharedModule { }
