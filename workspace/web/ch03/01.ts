// Readonly 유틸리티 타입
(() => {
  interface Todo {
    title: string;
    content: string;
  }

  const todo1: Todo = {
    title: "할일 1",
    content: "내용 1",
  };
  console.log(todo1);

  // interface ReadonlyTodo {
  //   readonly title: string;
  //   readonly content: string;
  // }

  // 인터페이스로 정의
  // interface ReadonlyTodo extends Readonly<Todo> {}
  // 타입 별칭으로 정의
  type ReadonlyTodo = Readonly<Todo>;

  const todo2: ReadonlyTodo = {
    //여러번 재활용해야한다면 함수형으로 만들어 놓는게 편함
    title: "할일 2",
    content: "내용 2",
  };
  console.log(todo2);
  // todo2.title = "수정"; // error

  const todo3: Readonly<Todo> = {
    //값을 바로 만들어서 쓰는 방법 -> 한번만쓸때 추천
    title: "할일 3",
    content: "내용 3",
  };
  console.log(todo3);
  // todo3.title = '수정'; // error
})();
