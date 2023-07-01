import React from 'react'

import { AdvertisingCard } from 'widgets/advertising'

const HomePage = () => (
  <AdvertisingCard
    subtitle="Subtitle"
    timeBeforeStart="asd"
    title="title home"
    onClickReadButton={() => console.log('new widget hello!')}
  />
)

export default HomePage
