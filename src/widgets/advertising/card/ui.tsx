import React, { FC, useMemo } from 'react'

import { AdvertisingCardButtonRead } from 'features/advertising'

import { AdvertisingCard as AdvertisingCardEntity } from 'entities/advertising'

import { TAdvertisingCardProps } from './types'

export const AdvertisingCard: FC<TAdvertisingCardProps> = ({
  onClickReadButton,
  ...props
}) => {
  const readMoreButton = useMemo(
    () => <AdvertisingCardButtonRead onClick={onClickReadButton} />,
    [onClickReadButton]
  )

  return (
    <AdvertisingCardEntity readMoreButton={readMoreButton} {...props}>
      lorem ipsum
    </AdvertisingCardEntity>
  )
}
