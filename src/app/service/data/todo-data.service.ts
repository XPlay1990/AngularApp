import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todos/todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  getTodos(username) {
    return this.httpClient.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  getTodo(username, id) {
    return this.httpClient.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  deleteTodo(username, id) {
    return this.httpClient.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo) {
    return this.httpClient.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username, todo) {
    return this.httpClient.post<Todo>(`${API_URL}/users/${username}/todos`, todo);
  }
}
