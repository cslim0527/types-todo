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

console.log("-----", myTodoCollection.userName, "-----");
myTodoCollection.todoItems.forEach((item) => item.printDetails());
