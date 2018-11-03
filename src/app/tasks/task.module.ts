import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCubeComponent } from './task-cube/task-cube.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskRoutingModule } from './tasks-routing.module';
import {
  MatFormFieldModule,
  MatInputModule, MatIconModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TaskRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ],
  declarations: [
    TaskCubeComponent,
    TaskListComponent,
    TaskFormComponent,
  ],
  exports: [
    TaskCubeComponent,
    TaskListComponent,
    TaskFormComponent
  ]
})
export class TaskModule { }
