import React, { useState } from 'react';
import { avatar, logo } from '../../images';
import {
  AvatarWrapper,
  CardBottomWrapper,
  CardWrapper,
  LogoWrapper,
  StyledButton,
  StyledCard,
  StyledText,
} from './ProfileCard.styled';

function ProfileCard() {
  const numberWithCommas = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const [isFollowed, setIsFollowed] = useState(false);
  const [followers, setFollowers] = useState(100500);

  const handleClick = () => {
    setIsFollowed(prevState => !prevState);
    isFollowed
      ? setFollowers(prevState => prevState - 1)
      : setFollowers(prevState => prevState + 1);
  };

  return (
    <StyledCard>
      <CardWrapper>
        <LogoWrapper>
          <img src={logo} alt="GOIT logo" />
        </LogoWrapper>
        <AvatarWrapper>
          <img src={avatar} alt="user profile avatar" height="62px" />
        </AvatarWrapper>
        <CardBottomWrapper>
          <StyledText> 777 TWEETS</StyledText>
          <StyledText mb="26px">
            {numberWithCommas(followers)} FOLLOWERS
          </StyledText>
          <StyledButton
            onClick={handleClick}
            bgColor={isFollowed ? '#5CD3A8' : '#ebd8ff'}
          >
            {isFollowed ? 'Following' : 'Follow'}
          </StyledButton>
        </CardBottomWrapper>
      </CardWrapper>
    </StyledCard>
  );
}

export default ProfileCard;
