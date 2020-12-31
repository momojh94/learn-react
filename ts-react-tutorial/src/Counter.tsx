import React, { useReducer } from 'react';

// 이렇게 액션을 | 으로 연달아서 쭉 나열하세요.
type Action = { type: 'INCREASE' } | { type: 'DECREASE' }; 

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;

/*

import React, { useState } from 'react';

//
count state 처럼 Generics <> 타입 정해도 되고 안해도
유추를 하긴함 그래서 사실상 안해도 무방하나

아래 처럼 null일 수도 있고 아닐 수도 있을 때 Generics 활용 하면 됨.
type Information = { name: string; description: string };
const [info, setInformation] = useState<Information | null>(null);
//

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;

*/

