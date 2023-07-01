import { IAdvertisingCardButtonReadProps } from 'features/advertising'

import { ICardDefaultProps } from 'entities/advertising'

export type TAdvertisingCardProps = {
  onClickReadButton: IAdvertisingCardButtonReadProps['onClick']
} & Omit<ICardDefaultProps, 'children'>
