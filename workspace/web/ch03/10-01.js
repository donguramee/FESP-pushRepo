// 타입 단언이 필요한 JS 코드

(() => {
  //1.
  const todo1: Todo = {};
  todo1.title = "할일 1";

  //2.
  const todo2 = { title: "할일2" };
  todo2.content = "타입스크립트 알아보기";

  //3.
  const todo3 = {
    title: "할일 3",
    content: "자바스크립트 다시보기",
  };

  //4.
  const todo4 = {
    title: "할일 4",
    content: "react복습",
  };
  console.log(todo1, todo2, todo3, todo4);
})();
