import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

/*
NavLink는 Link랑 비슷하지만 만약 현재 경로와 Link에서 사용하는
경로가 일치하는 경우 특정 스타일 혹은 클래스를 적용할 수 있는 컴포넌트이다.
*/

// 스타일이 아니라 css 클래스 적용하고 싶으면 activeStyle 대신 activeClassName 사용

/*
Redirect: 페이지를 리디렉트 하는 컴포넌트
Prompt: 이전에 사용했던 history.block 의 컴포넌트 버전
Route Config: JSX 형태로 라우트를 선언하는 것이 아닌 Angular 나 Vue 처럼 배열/객체를 사용하여 라우트 정의하기
Memory Router 실제로 주소는 존재하지는 않는 라우터. 리액트 네이티브나, 임베디드 웹앱에서 사용하면 유용하다.
*/

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/chulsu"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            chulsu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            activeStyle={{ background: 'black', color: 'white' }}
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <WithRouterSample />
    </div>
  );
};

export default Profiles;