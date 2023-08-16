import React, { useState } from 'react';
import './todolist.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [id, setId] = useState(1);

  const handleAddTodo = () => {
    if (newTodo !== '') {
      const newId = id + 1;
      const newTodoItem = {
        id: newId, text: newTodo, editing: false, editText: '',
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
      setId(newId);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleEditTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: true, editText: todo.text };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleSaveEditTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: false, text: todo.editText };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleCancelEditTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editing: false };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.editing ? (
              <span>
                <input
                  className="todo-input"
                  type="text"
                  value={todo.editText}
                  onChange={(event) => {
                    const newEditText = event.target.value;
                    const newTodos = todos.map((t) => {
                      if (t.id === todo.id) {
                        return { ...t, editText: newEditText };
                      }
                      return t;
                    });
                    setTodos(newTodos);
                  }}
                />
                <button type="button" onClick={() => handleSaveEditTodo(todo.id)}>Save</button>
                <button type="button" onClick={() => handleCancelEditTodo(todo.id)}>Cancel</button>
              </span>
            ) : (
              <span>
                {todo.text}
                <button type="button" onClick={() => handleEditTodo(todo.id)}>Edit</button>
                <button type="button" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </span>
            )}
          </li>
        ))}
      </ul>
      <div className='box'>
      <input
        type="text"
        className="todo"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default TodoList;
