import React from 'react';

type Children = JSX.Element[] | JSX.Element

interface Todo {
  id: number;
  text?: string;
  completed?: boolean;
}

interface TodoState {
  todos: [Todo] | [];
}

interface Action {
  type: string;
  payload: Todo;
}


const TodoStateContext = React.createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = React.createContext<React.Dispatch<Action> | undefined>(undefined);

const initialState: TodoState = {
  todos: [],
};



function todoReducer(state: TodoState, action: Action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        todos: [...state.todos, action.payload],
      }
    }
    case 'REMOVE_TODO': {
      const newState = state.todos.filter(todoObject => todoObject.id !== action.payload.id)
      return {
        todos: newState,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
type Reducer<S, A> = (prevState: S, action: A) => S;

function TodoProvider({ children }: { children: Children}) {
  const [state, dispatch] = React.useReducer<Reducer<any, any>>(todoReducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoState() {
  const context = React.useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error('useTodoState must be used within a TodoProvider');
  }
  return context;
}

function useTodoDispatch() {
  const context = React.useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error('useTodoDispatch must be used within a TodoProvider');
  }
  return context;
}

export { TodoProvider, useTodoState, useTodoDispatch };
