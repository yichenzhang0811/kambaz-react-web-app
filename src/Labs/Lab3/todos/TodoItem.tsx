const TodoItem = ({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" },
}) => {
  return (
    <div>
      <li className="list-group-item">
        <input type="checkbox" className="me-2" defaultChecked={todo.done} />
        {todo.title} ({todo.status})
      </li>{" "}
      <hr />
    </div>
  );
};
export default TodoItem;
