import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  /*
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    }
  }, [user]);
  */

  useEffect(() => {
    console.log(user);
  });

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
/*
배열 렌더링 할 때 key가 없으면 비효율적이다.
[a, b, c, d] 에서 b와 c 사이에 z가 들어가면 중간에 삽입되는 것이 아니라
기존의 c가 z가 되고 d가 c로 되고 d가 새로 삽입된다.

고유한 key값을 가지고 위와 같은 예시로 업데이트 하게되면
수정되지 않는 기존의 값은 그대로 두고 b와 c사이의 z가 삽입됨.
*/

  return (
    <div>
      <br></br>
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

/*
UserList.defualtProps = {
  users : [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]
};
*/

export default UserList;