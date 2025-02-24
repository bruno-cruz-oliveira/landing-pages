import styled, { css } from 'styled-components';

const titleSize = {
    small: (theme) => css`
        font-size: ${theme.font.sizes.medium};
    `,
    medium: (theme) => css`
        font-size: ${theme.font.sizes.large};
    `,
    big: (theme) => css`
        font-size: ${theme.font.sizes.xlarge};
    `,
    huge: (theme) => css`
        font-size: ${theme.font.sizes.huge};
        ${mediaFont(theme)};
    `,
}

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
    text-transform: ${uppercase === 'true'? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, color_dark, size, uppercase }) => css`
    color: ${color_dark === 'true' ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;