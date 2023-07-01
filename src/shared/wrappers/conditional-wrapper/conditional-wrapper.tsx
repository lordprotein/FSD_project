import React, { FC } from 'react'

import { IConditionalWrapperProps } from './types'

export const ConditionalWrapper: FC<IConditionalWrapperProps> = ({
  children,
  isWrapping,
  wrapper
}) =>
  // eslint-disable-next-line react/jsx-no-useless-fragment
  isWrapping ? wrapper(children) : <>{children}</>
