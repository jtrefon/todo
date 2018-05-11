import { Injectable } from '@angular/core';
import { TodoInterface } from './todo.interface';
import { TodoModel } from './TodoModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
public todos: TodoInterface[] = [];
public todo: TodoInterface = new TodoModel;

  constructor() { }

  public add(): number {
    this.todos.push(this.todo);
    this.todo = new TodoModel;
    return this.todos.length;
  }

  public get(index: number): TodoInterface {
    return this.todos[index];
  }

  public del(index: number): void {
     this.todos.splice(index, 1);
  }

  public update(index: number, todo: TodoInterface): boolean {
    if (this.todos[index] === undefined) { return false; }
    this.todos[index] = todo;
    return true;
  }
}
