import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from 'components/Heading/styles';

export const Wrapper = styled.div<{ transitionDelay: string }>`
  ${({ theme, transitionDelay }) => css`
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    padding: 10px;
    position: relative;
    opacity: 0;
    transition: opacity ${transitionDelay};

    &:hover::before {
      opacity: 1;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: opacity 500ms;
      border-radius: inherit;
      z-index: -1;
      background: radial-gradient(
        400px circle at var(--mouse-x) var(--mouse-y),
        ${theme.colors.hoverRgb},
        transparent 40%
      );
    }

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

    &.show {
      opacity: 1;
    }
  `}
`;

export const Cover = styled.img`
    width: 100%;
    max-height: 24rem;
    height: 100%;
    transition: opacity 300ms ease-in-out;
`;

export const Excerpt = styled.p`
`;
