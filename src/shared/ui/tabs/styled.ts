import styled, { css } from 'styled-components'

export const TabsStyled = styled.ul`
  ${(props) => css`
    background-color: ${props.theme.colors.primary[80]};
    border-radius: 8px;
    color: ${props.theme.colors.primary[0]};
    display: flex;
    width: fit-content;
  `}
`

export const TabStyled = styled.li<{ $isActive: boolean }>`
  ${(props) => css`
    cursor: pointer;
    padding: 5px 10px;

    ${props.$isActive &&
    css`
      background-color: ${props.theme.colors.primary[0]};
      border: 1px solid ${props.theme.colors.primary[80]};
      border-radius: 8px;
      color: ${props.theme.colors.primary[80]};
    `}
  `}
`
