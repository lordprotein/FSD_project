import styled, { css } from 'styled-components'

export const CardDefaultStyled = styled.div`
  background-color: ${(props) => props.theme.colors.purple[70]};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.primary[0]};
  padding: 5px;
  width: fit-content;
`

export const CardDefaultInfoStyled = styled.div``

export const CardDefaultInfoTitleStyled = styled.div`
  ${(props) => css`
    font-size: ${props.theme.fonts.size.l};
  `}
`

export const CardDefaultInfoSubtitleStyled = styled.div``

export const CardDefaultInfoContentStyled = styled.div``
