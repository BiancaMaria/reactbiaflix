import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border: 2px solid;
  border-radius: 10px;
  display:inline-block;
  height: 197px;
  transition: opacity .3s;
  width: 298px;

  &:hover,
  &:focus {
    opacity: .5;
  }

   /*
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  position: relative;
 display: flex;
  align-items: flex-end;
  padding: 16px;

  &:not(:first-child) {
    margin-left: 20px;
  }*/
`;
