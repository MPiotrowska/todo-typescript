import React from 'react';
import { Todo } from '../../lib/todoContext';

export const List = ({ todos }: { todos: Todo[] }) => {
  return (
    <div>
      {todos.map(todo => {
        return <ListItem todo={todo} />;
      })}
    </div>
  );
};

const ListItem = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <div>{todo.text}</div>
      <button>x</button>
    </>
  );
};
