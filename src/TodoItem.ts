// public, private 로 접근지장자를 설정하면 property 로 접근 된다.

class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetails(): void {
    console.log(
      `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
    );
  }
}

export default TodoItem;
