import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from 'components/Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles}  {
      margin: 0;
      margin-top: calc(${theme.spacings.small} - 0.6rem);
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      opacity: 0.8;
    }
  `}
`;

export const Cover = styled.img`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;
`;

export const Excerpt = styled.p`
`;
