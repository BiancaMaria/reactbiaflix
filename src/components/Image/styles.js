import styled from 'styled-components';

export const ImageBase = styled.Image`
  background: var(--black);
  border-top: 2px solid var(--vermelho);
  color: var(--white);
  padding:32px 16px;/*P.TOP P.BOTTOM = 32px */
  /*P.Left E P.Right = 16px */
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
