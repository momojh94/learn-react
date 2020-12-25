import React from 'react';
// 글로벌 스타일을 추가하고 싶을 때 사용
import { createGlobalStyle } from 'styled-components';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #E1EDFA;
    // background: #e9ecef;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;