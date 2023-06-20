import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${() => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      width: 15rem;
      height: 15rem;
      border-radius: 50%;
    }
  `}
`;
