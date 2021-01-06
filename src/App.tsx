import React from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './components/List';
import { useTodoState } from './lib/todoContext';

function App() {
  const globalState = useTodoState();
  return (
    <div className='App'>
      <List todos={globalState.todos} />
    </div>
  );
}

export default App;
