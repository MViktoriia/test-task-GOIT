import styled from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px;
  justify-items: center;
  align-items: center;
  padding: 50px 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
