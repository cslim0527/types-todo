"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const TodoItem_1 = __importDefault(require("./TodoItem"));
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const sampleTodos = data_1.data.map(({ id, task, complete }) => new TodoItem_1.default(id, task, complete));
const myTodoCollection = new TodoCollection_1.default("My Todo List", sampleTodos);
myTodoCollection.addTodo("Javascript 학습하기");
myTodoCollection.addTodo("밥 먹기");
myTodoCollection.markComplete(3, true);
myTodoCollection.removeComplete();
console.log("-----", myTodoCollection.userName, "-----");
myTodoCollection.getTodoItems(true).forEach((todo) => todo.printDetails());
console.log("========================");
myTodoCollection.getTodoItems(false).forEach((todo) => todo.printDetails());
