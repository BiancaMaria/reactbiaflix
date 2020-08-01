import styled from 'styled-components';

export const VideoCardGroupContainer = styled.section`
  color: var(--white);
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  background: red;
  border-radius: 4px;
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;  
  padding: 20px;
  
  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  overflow-x: auto;/*scroll de rolagem*/ 
  
  li {
    margin-right: 16px;
    
  }
`;




