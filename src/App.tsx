import React from 'react';
import './App.css';
import { List } from './components/List';
import { useTodoState } from './lib/todoContext';
import { AddForm } from './components/AddForm';

function App() {
  const globalState = useTodoState();
  return (
    <div className='App'>
      <List todos={globalState.todos} />
      <AddForm />
    </div>
  );
}

export default App;
