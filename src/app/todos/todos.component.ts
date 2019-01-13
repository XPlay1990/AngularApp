import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [
    new Todo(1, 'learn angular', false, new Date()),
    new Todo(2, 'start own business', false, new Date()),
    new Todo(3, 'get rich', false, new Date())
  ]
  
  constructor() { }

  ngOnInit() {
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