import React, { useEffect, useState } from 'react';

import users from '../../db/users.json';
import { CardList } from '../CardList';

function App() {
  const [usersInfo, setUsersInfo] = useState(
    JSON.parse(window.localStorage.getItem('usersInfo')) ||
      users.map(user => {
        return { ...user, isFollowed: false };
      })
  );

  useEffect(() => {
    window.localStorage.setItem('usersInfo', JSON.stringify(usersInfo));
  }, [usersInfo]);

  const handleClick = id => {
    setUsersInfo(
      usersInfo.map(item =>
        item.id === id && item.isFollowed === false
          ? { ...item, followers: item.followers + 1, isFollowed: true }
          : item.id === id && item.isFollowed === true
          ? { ...item, followers: item.followers - 1, isFollowed: false }
          : item
      )
    );
  };

  return (
    <main>
      <CardList users={usersInfo} onClick={handleClick} />
    </main>
  );
}

export default App;
