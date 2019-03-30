import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
import { JWTAuthenticationService } from '../service/jwt-authenticationservice';

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

  constructor(private jwtservice: JWTAuthenticationService, private todoService: TodoDataService, private router: Router) { }

  private username;

  ngOnInit() {
    this.username = this.jwtservice.getAuthenticatedUser()
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.getTodos(this.username).subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  deleteTodo(id) {
    this.todoService.deleteTodo(this.username, id).subscribe(
      response => {
        this.message = `Deleted of Todo ${id} successful`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id) {
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
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