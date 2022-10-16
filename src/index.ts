import { data } from "./data";
import TodoItem from "./TodoItem";
import TodoCollection from "./TodoCollection";

const sampleTodos: TodoItem[] = data.map(
  ({ id, task, complete }) => new TodoItem(id, task, complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("Javascript 학습하기");
myTodoCollection.addTodo("밥 먹기");
myTodoCollection.markComplete(3, true);
myTodoCollection.removeComplete();

console.log("-----", myTodoCollection.userName, "-----");
myTodoCollection.getTodoItems(true).forEach((todo) => todo.printDetails());
console.log("========================");
myTodoCollection.getTodoItems(false).forEach((todo) => todo.printDetails());
