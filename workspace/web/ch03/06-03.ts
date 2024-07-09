// Mapped 타입 - 매핑 수정자

(() => {
  interface Todo {
    id: number;
    title: string;
    content: string;
  }

  //   type ReadonlyTodo = Readonly<Todo>; //모든 속성을 읽기전용으로
  //   type PartialTodo = Partial<Todo>; //모든속성을 옵셔널로

  type PartialTodo = {
    [Prop in keyof Todo]?: Todo[Prop];
  };

  type MyPartial<T> = {
    [Prop in keyof T]?: string; //todo가 가지고 있는 만큼 속성을 추가하는법
  };

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };

  todo1.title = "수정";
  console.log(todo1);
})();
