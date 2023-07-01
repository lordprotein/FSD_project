import { ReactNode } from 'react'

export interface ICardDefaultProps {
  title: string
  subtitle: string
  children: ReactNode | ReactNode[]
  timeBeforeStart: string
  readMoreButton?: ReactNode
}
