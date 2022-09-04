import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    { task:"Minha nova Task", checked:true },
    { task:"Minha nova Task 2", checked:false }
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteItemTaskList(event:number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("você deseja deletar tudo?")
    if(confirm){
      this.taskList = [];
    }
  }
}
