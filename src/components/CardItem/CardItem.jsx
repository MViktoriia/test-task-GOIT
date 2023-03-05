// import React, { useEffect, useState } from 'react';
import { logo } from '../../images';
import {
  AvatarWrapper,
  CardBottomWrapper,
  CardWrapper,
  ImageWrapper,
  LogoWrapper,
  StyledButton,
  StyledCard,
  StyledText,
} from './CardItem.styled';

function CardItem({ id, tweets, followers, avatar, onClick, isFollowed }) {
  const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <StyledCard>
      <CardWrapper>
        <LogoWrapper>
          <img src={logo} alt="GOIT logo" />
        </LogoWrapper>
        <AvatarWrapper>
          <ImageWrapper>
            <img
              src={avatar}
              alt="user profile avatar"
              height="62px"
              width="62px"
            />
          </ImageWrapper>
        </AvatarWrapper>
        <CardBottomWrapper>
          <StyledText> {tweets} TWEETS</StyledText>
          <StyledText mb="26px">
            {numberWithCommas(followers)} FOLLOWERS
          </StyledText>
          <StyledButton
            onClick={() => onClick(id)}
            bgColor={isFollowed ? '#5CD3A8' : '#ebd8ff'}
          >
            {isFollowed ? 'Following' : 'Follow'}
          </StyledButton>
        </CardBottomWrapper>
      </CardWrapper>
    </StyledCard>
  );
}

export default CardItem;
