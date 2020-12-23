// 클래스형 컴포넌트
import React, { Component } from 'react';

/*
클래스형 컴포넌트에서는 render() 메서드가 꼭 있어야 한다.
render 메서드에서는 렌더링하고 싶은 jsx를 반환하면 된다.
props를 조회할 때는 this.props를 조회하면 된다.
*/

class Hello extends Component {
  // defaultProps로 설정한 것과 동일
  static defaultProps = {
    name: '이름없음'
  };

  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        { isSpecial && <b>*</b> }
        안녕하세요 {name}
      </div>
    );
  }
}

export default Hello;


/*
함수형
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial && <b>***</b> }
      안녕하세요 {name}
    </div>
  );
}
*/