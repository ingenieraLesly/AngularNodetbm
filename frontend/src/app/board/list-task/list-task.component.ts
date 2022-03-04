import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
