import React, { FC, useEffect } from 'react'

import { AdvertisingCardButton } from 'entities/advertising'

import { IAdvertisingCardButtonReadProps } from './types'

export const AdvertisingCardButtonRead: FC<IAdvertisingCardButtonReadProps> = ({
  onClick
}) => {
  useEffect(() => {
    // Some logic
  }, [])

  return (
    <AdvertisingCardButton
      title="Read more"
      onClick={() => {
        onClick()
        console.log(123)
      }}
    />
  )
}
