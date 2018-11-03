import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  taskForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      'taskName': new FormControl(''),
      'description': new FormControl('')
    });
  }

}
