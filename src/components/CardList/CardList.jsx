import React from 'react';
import { CardItem } from '../CardItem';
import Container from '../Container/Container';
import { StyledList } from './CardList.styled';

function CardList({ users, onClick }) {
  return (
    <Container>
      <StyledList>
        {users.map(({ id, tweets, followers, avatar, isFollowed }) => {
          return (
            <CardItem
              key={id}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              id={id}
              onClick={onClick}
              isFollowed={isFollowed}
            />
          );
        })}
      </StyledList>
    </Container>
  );
}

export default CardList;
