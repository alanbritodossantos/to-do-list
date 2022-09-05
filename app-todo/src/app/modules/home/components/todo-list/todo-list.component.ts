import { TaskList } from './../../model/task-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [];

  constructor() {}

  ngOnInit(): void {}

  public setEmitTaskList(event:string){
    this.taskList.push({task:event,checked:false});
  }
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
