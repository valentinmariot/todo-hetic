import React, { useState, useEffect, useRef } from 'react';
import { Button, Box, Input } from '@chakra-ui/react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };

  return (
    <form
        className='todo-form'
        onSubmit={handleSubmit}
    >
      {props.edit ? (
        <Box>
            <Input
                className='todo-input edit'
                name='text'
                onChange={handleChange}
                placeholder='Mettre à jour'
                ref={inputRef}
                value={input}
            />
            <Button
                className='todo-button edit'
                onClick={handleSubmit}
            >
                Éditer
            </Button>
        </Box>
      ) : (
        <Box>
            <Input
                className='todo-input'
                colorScheme='pink'
                focusBorderColor='purple.400'
                name='text'
                mb='10px'
                w='50%'
                onChange={handleChange}
                placeholder='Il me faut ...'
                ref={inputRef}
                value={input}
                variant='flushed'

            />
            <Button
                colorScheme='purple'
                className='todo-button'
                onClick={handleSubmit}
                variant='outline'
            >
                Ajouter à la liste de chose à faire
            </Button>
        </Box>
      )}
    </form>
  );
}

export default TodoForm;