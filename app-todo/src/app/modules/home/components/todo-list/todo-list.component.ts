import { TaskList } from './../../model/task-list';
import { Component, DoCheck, OnInit } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [];

  constructor() {}
  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }

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

  public validationInput(event:string, index:number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?")

      if(confirm)
        this.deleteItemTaskList(index);
    }
  }
}
