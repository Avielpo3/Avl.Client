import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.service';
import { Constants } from 'src/app/Constants/url.constants';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getItems<Task[]>(Constants.GetTasks).subscribe(
      (taskList: Task[]) => this.tasks = taskList,
      err => console.log(err)
    );
  }

}
