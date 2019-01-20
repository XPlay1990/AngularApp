import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient:HttpClient) { }

  getTodos(username){
    return this.httpClient.get<Todo[]>(`http://localhost:9020/users/${username}/todos`);
  }
}
