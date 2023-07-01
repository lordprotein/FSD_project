import React, { FC } from 'react'

import { ButtonStyled } from './styled'
import { IButtonProps } from './types'

export const Button: FC<IButtonProps> = ({ title, ...props }) => (
  <ButtonStyled {...props}>{title}</ButtonStyled>
)
