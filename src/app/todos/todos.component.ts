import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[]

  message: string
  // todos = [
  //   new Todo(1, 'learn angular', false, new Date()),
  //   new Todo(2, 'start own business', false, new Date()),
  //   new Todo(3, 'get rich', false, new Date())
  // ]

  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.getTodos('Jan').subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    this.todoService.deleteTodo("Jan", id).subscribe(
      response => {
        console.log(response)
        this.message = `Deleted of Todo ${id} successful`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id) {
    this.router.navigate(['todos', id])
  }
}


export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}