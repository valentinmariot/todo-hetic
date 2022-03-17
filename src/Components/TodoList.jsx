import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <Box
        w='70%'
        m='50px auto'
    >
      <Text fontSize='6xl'>Ne pas oublier de :</Text>
      <TodoForm onSubmit={addTodo} />
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        todos={todos}
        updateTodo={updateTodo}
      />
    </Box>
  );
}

export default TodoList;