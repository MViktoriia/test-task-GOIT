import styled from 'styled-components';
import { bgCard, ellipse, rectangle } from '../../images';

export const StyledCard = styled.li`
  box-sizing: border-box;
  width: 380px;
  padding: 20px;
  list-style: none;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${bgCard});
  background-repeat: no-repeat;
  background-position: top 8px left 16px;
  &::after {
    content: '';
    width: 80px;
    height: 80px;
    background-image: url(${ellipse});
    background-repeat: no-repeat;
    background-size: 80px 80px;
    position: absolute;
    top: 158px;
    left: 130px;
  }
`;

export const LogoWrapper = styled.div`
  width: 76px;
  height: 22px;
  margin-bottom: 136px;
`;

export const AvatarWrapper = styled.div`
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 26px;
  /* box-sizing: border-box; */
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border-radius: 50%;

  &::before {
    content: '';
    width: 150px;
    height: 8px;
    background-image: url(${rectangle});
    background-repeat: no-repeat;
    position: absolute;
    top: 36px;
    left: -150px;
  }
  &::after {
    content: '';
    width: 150px;
    height: 8px;
    background-image: url(${rectangle});
    background-repeat: no-repeat;
    position: absolute;
    top: 36px;
    left: 80px;
  }
`;

export const CardBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  margin-bottom: ${props => props.mb || '16px'};
`;

export const StyledButton = styled.button`
  padding: 14px 39px;
  min-width: 196px;
  margin-bottom: 16px;
  color: #373737;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  background: ${props => props.bgColor};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
`;
