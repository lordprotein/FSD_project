import React, { FC } from 'react'

import {
  CardDefaultInfoContentStyled,
  CardDefaultInfoStyled,
  CardDefaultInfoSubtitleStyled,
  CardDefaultInfoTitleStyled,
  CardDefaultStyled
} from './styled'
import { ICardDefaultProps } from './types'

export const AdvertisingCard: FC<ICardDefaultProps> = ({
  children,
  readMoreButton,
  subtitle,
  // timeBeforeStart,
  title
}) => (
  <CardDefaultStyled>
    <CardDefaultInfoStyled>
      <CardDefaultInfoTitleStyled>{title}</CardDefaultInfoTitleStyled>

      <CardDefaultInfoSubtitleStyled>{subtitle}</CardDefaultInfoSubtitleStyled>

      <CardDefaultInfoContentStyled>{children}</CardDefaultInfoContentStyled>

      {readMoreButton}
    </CardDefaultInfoStyled>
  </CardDefaultStyled>
)
