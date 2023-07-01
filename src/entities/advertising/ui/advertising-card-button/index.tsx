import React, { FC } from 'react'

import { AdvertisingCardDefaultReadButtonStyled } from './styled'
import { ICardDefaultReadButtonProps } from './types'

export const AdvertisingCardButton: FC<ICardDefaultReadButtonProps> = ({
  onClick,
  title
}) => (
  <AdvertisingCardDefaultReadButtonStyled onClick={onClick}>
    {title}
  </AdvertisingCardDefaultReadButtonStyled>
)
