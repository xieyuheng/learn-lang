import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as state from './todoSlice';

export default function TodoForm() {
  const dispatch = useDispatch();

  const todos = useSelector(state.selectors.todos);

  const [todoInput, setTodoInput] = useState('');

  function freshId() {
    const ids = todos.map((todo) => todo.id);
    if (ids.length === 0) return 0;
    return Math.max(...ids) + 1;
  }

  function addTodo(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (!todoInput.trim()) return;
    const newTodo = { id: freshId(), title: todoInput, isComplete: false };
    dispatch(state.actions.setTodos([newTodo, ...todos]));
    setTodoInput('');
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setTodoInput(event.target.value);
  }

  return (
    <form className="border-2" action="#" onSubmit={(event) => addTodo(event)}>
      <input
        className="p-2"
        type="text"
        placeholder="Add todo"
        value={todoInput}
        onChange={(event) => handleInput(event)}
      />
    </form>
  );
}
