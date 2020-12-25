import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="인쇙 화이팅" done={true} />
      <TodoItem text="아자아자" done={false} />
    </TodoListBlock>
  )
}

export default TodoList;