import React, { useState } from 'react';
import TodoForm from './Todo';
import { Box, Icon } from '@chakra-ui/react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  // @NOTE : Resolve edit problem (map?)
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
      <Box
        className={`todo-row ${todo.isComplete ?? 'complete'}`}
        key={index}
      >
          <Box
            key={todo.id} 
            onClick={() => completeTodo(todo.id)}
          >
            {todo.text}
          </Box>
          <Box className='icons'>
            <Icon 
              as={RiCloseCircleLine}
              className='delete-icon'
              onClick={() => removeTodo(todo.id)}
            />
            <Icon
              as={TiEdit}
              className='edit-icon'
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
            />
          </Box>
      </Box>
  ));
};

export default Todo;