import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List Application';

  nextId = 4;
  todos = [
    {
      id: 1,
      label: 'Buy Bread & Milk',
      done: false
    },
    {
      id: 2,
      label: 'Submit Final Projects',
      done: false
    },
    {
      id: 3,
      label: 'Mop the Floor',
      done: true
    },
  ];

  delete(todo: any) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  add(newTodoLabel: any) {
    let newTodo = {
      id: this.nextId,
      label: newTodoLabel,
      done: true
    };
    this.todos.push(newTodo);
    this.nextId++;
  }

  change(todo: any) {
    todo.done = !todo.done;
  }
}
