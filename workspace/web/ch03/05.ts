// Omit 유틸리티 타입 - 외부 파일에 type 정의

import { Todo } from "./types/todo";

(() => {
  // interface Todo {
  //   id: number;
  //   title: string;
  //   content: string;
  //   done: boolean;
  //   createdAt: Date;
  //   updatedAt: Date;
  // }

  type TodoRegist = Pick<Todo, "title" | "content">;
  type TodoList = Omit<Todo, "content" | "createdAt">;

  const todo1: TodoRegist = {
    title: "할일 1",
    content: "등록에 사용",
  };
  const todo2: TodoList = {
    title: "목록 2",
    id: 2,
    done: false,
    updatedAt: new Date(),
  };
  console.log(todo1, todo2);
  //인터페이스에서 Omit된 타입만 빼고 가능
})();
