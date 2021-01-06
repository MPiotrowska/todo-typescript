import React from 'react';
import ContentEditable from 'react-contenteditable';
import { Todo, useTodoDispatch } from '../../lib/todoContext';

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
  const [editableText, setEditableText] = React.useState(todo.text);
  const dispatch = useTodoDispatch();

  const handleChange = (e: any) => {
    setEditableText(e.currentTarget.value);
    
  };

  const handleClick = () => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: {
        id: todo.id,
      },
    });
  };

  return (
    <>
      <input value={editableText} onChange={handleChange} />
      <button onClick={handleClick}>x</button>
    </>
  );
};
