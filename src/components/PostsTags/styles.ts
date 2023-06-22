import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;

    span  {
      margin: 0 0.5rem;
    }

    span::after {
      content: ', ';
    }

    span:last-child:after {
      content: '';
    }

    a {
      color: ${theme.colors.secondary};
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    text-align: center;
    font-size: ${theme.font.sizes.small};
  `}
`;
