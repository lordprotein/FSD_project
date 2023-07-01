import styled, { css } from 'styled-components'

export const InputStyled = styled.input`
  ${(props) => css`
    border: 1px solid ${props.theme.colors.primary[40]};
    border-radius: 4px;
    height: 40px;
    outline: none;
    padding: 0 6px;
  `}
`

export const InputWrapperStyled = styled.div``

export const InputErrorStyled = styled.div``

export const InputLabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`

export const InputLabelTextStyled = styled.h3`
  ${(props) => css`
    font-size: ${props.theme.fonts.size.s};
  `}
`
