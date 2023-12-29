import React, { useState } from 'react'

// eslint-disable-next-line react/function-component-definition
  const NewTodo = ({ onNewTodo }) => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if(onNewTodo) {
      onNewTodo(value);
      erase();}
  };

  const onChange =  (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase ();
    }
  };

  return (
    <input
      className="new-todo"
      placeholder='o que precisa ser feito?'
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
)};

export default NewTodo;
