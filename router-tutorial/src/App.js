import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

/*
다른 주소 이동<a href="...">...</a> 태그를 사용하면 안된다.
만약에 한다면 onClick에 e.preventDefault()를 호출하고 따로 자바스크립트로
주소를 변환시켜주어야함.
a 태그의 기본적인 속성이 페이지를 이동시키면서, 페이지를 아예 새로 불러오기 때문에
리액트 앱이 지니고 있는 상태들도 초기화 되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링 하게됨.

그래서 Link컴포넌트를 사용한다.
(HTML5 History API를 사용하여 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지 않는다.)
*/

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;