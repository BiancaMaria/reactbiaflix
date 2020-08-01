import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 168px;

    @media(max-width:800px){
        max-width:105px;
    }
`;

export const MenuWrapper = styled.nav`
  align-items:center;
  background-color:var(--black);
  border-bottom:2px solid var(--vermelho);
  display:flex;
  height:94px;
  justify-content:space-between;
  left:0;
  padding-left:5%;
  padding-right:5%;
  position:fixed;
  top:0;
  width:100%;
  z-index:1;

  @media(max-width:800px){ 
    height:40px;
    justify-content:center;
  }`;

