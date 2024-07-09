// TODO: JS로 작성된 코드를 TS로 리팩토링. 로직은 수정하지 말고 타입만 추가 정의
// 10-01.js 복사
(() => {
  //Todo인터페이스 정의
  interface Todo {
    title: string;
    content: string;
  }
  //1.
  const todo1: Todo = {} as Todo; // as는 진짜 왠만하면 쓰지마 아무튼 쓰지마!!!!!
  todo1.title = "할일 1";

  //2.
  const todo2 = { title: "할일2" } as Todo;
  todo2.content = "타입스크립트 알아보기";

  //3.
  const todo3: Todo = {
    title: "할일 3",
    content: "자바스크립트 다시보기",
  };

  //4.
  const todo4: Todo = {
    title: "할일 4",
    content: "react복습",
  };
  console.log(todo1, todo2, todo3, todo4);
})();
