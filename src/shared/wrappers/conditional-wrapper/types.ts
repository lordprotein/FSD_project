import { ReactElement, ReactNode } from 'react'

export interface IConditionalWrapperProps {
  children: TChildren
  wrapper: (children: TChildren) => ReactElement<any, any>
  isWrapping: boolean | undefined
}

type TChildren = ReactNode | ReactNode[]
