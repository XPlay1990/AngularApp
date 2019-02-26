import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todos/todos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { JWTAuthenticationService } from '../service/jwt-authenticationservice';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: number
  todo: Todo
  private username;

  constructor(private jwtService: JWTAuthenticationService, private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.username = this.jwtService.getAuthenticatedUser()
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date())

    if (this.id != -1) {
      this.todoService.getTodo(this.username, this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  saveTodo() {
    if (this.id == -1) {
      //create new Todo
      this.todoService.createTodo(this.username, this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    } else {
      //update todo
      this.todoService.updateTodo('Lol', this.id, this.todo).subscribe(
        data => {
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
