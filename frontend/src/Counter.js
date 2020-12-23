import React, { Component } from 'react';

class Counter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      fixed: 1
    };

    // this.handleIncrease = this.handleIncrease.bind(this);
    // this.handleDecrease = this.handleDecrease.bind(this);
    // 만든 메서드들이 각 button들의 이벤트로 등록하게 되는 과정에서 각 메서드와
    // 컴포넌트 인스턴스의 관계가 끊김. 해결하는 방법 중 하나로
    // 생성자에서 bind 작업 해주기
    
  }


  /**
   * 클래스형 컴포넌트에서 state 는 무조건 객체형태여야 함.
   * class-properties 문법이 적용되어 있다면 굳이 constructor를 작성하지 않고도
   * 다음과 같이 state를 설정 해줄 수 있다.
   * CRA 로 만든 프로젝트에서는 보통 아래 처럼 많이 작성한다고 함.
   */
  /*
  state = {
    counter : 0
  };
  */

  /*
  handleIncrease() {
    console.log('increase');
  }

  handleDecrease() {
    console.log('decrease');
  }
  */

  /**
   * 화살표 함수 문법을 사용하면 this 알맞게 사용 가능
   * 
   * 클래스형 컴포넌트에서 화살표 함수를 사용해서 메서드를 구현 하는 것은
   * 클래스에 특정 속성을 선언 할 수 있게 해주는 class-properties 라는 문법을 사용
   * 이 문법은 아직 정식 자바스크립트 문법이 아님.
   * 단, CRA 로 만든 프로젝트에는 적용이 되어있는 문법이기 때문에 바로 사용 할 수 있다. 
   * 보통 CRA로 만든 프로젝트에서 커스텀 메서드를 만들 때 이 방법을 많이 사용한다. (가장 편하기도 함)
   * cra : creat-react-app
   */
  
  handleIncrease = () => {
    this.setState(state => ({
      counter: this.state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: this.state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값 : {this.state.fixed}</p>
      </div>
    )
  }
}

export default Counter;

/*
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type : 'INCREMENT' });
  }

  const onDecrease = () => {
    dispatch({ type : 'DECREMENT' });
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
*/