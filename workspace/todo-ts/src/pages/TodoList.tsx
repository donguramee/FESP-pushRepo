import { TodoListResponse } from "#types/todo";
import TodoItem from "@pages/TodoItem";

type Props = {
  item: TodoListResponse | null;
  refetch: () => Promise<void>;
};

function TodoList({ data, refetch }) {
  const items = data?.map((item) => (
    <TodoItem key={item.id} item={item} refetch={refetch} />
  ));
  return <ul>{items}</ul>;
}

export default TodoList;
