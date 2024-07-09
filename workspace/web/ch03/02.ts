// Required 유틸리티 타입
(() => {
  interface Todo {
    title: string;
    content?: string;
  }

  //인터페이스로 정의
  //   interface RequiredTodo extends Required<Todo> {}

  //타입별칭으로 정의
  type RequiredTodo = Required<Todo>;

  const todo1: RequiredTodo = {
    title: "할일 1",
    content: "내용 1",
  };
  const todo2: Required<Todo> = {
    title: "할일 2",
  };

  console.log(todo1, todo2);
})();
