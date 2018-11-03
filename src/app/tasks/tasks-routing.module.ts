import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from '../tasks/task-list/task-list.component';
import { TaskFormComponent } from '../tasks/task-form/task-form.component';

const routes: Routes = [
    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/add', component: TaskFormComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TaskRoutingModule { }
