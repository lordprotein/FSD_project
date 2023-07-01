import React, { FC, useCallback } from 'react'

import {
  ConditionalWrapper,
  IConditionalWrapperProps
} from 'shared/wrappers/conditional-wrapper'

import {
  InputErrorStyled,
  InputLabelStyled,
  InputLabelTextStyled,
  InputStyled,
  InputWrapperStyled
} from './styled'
import { IInputProps } from './types'

export const Input: FC<IInputProps> = ({
  errorText,
  labelText,
  onChange,
  value,
  ...props
}) => {
  const wrapperWithError: IConditionalWrapperProps['wrapper'] = useCallback(
    (children) => (
      <InputWrapperStyled>
        {children}
        <InputErrorStyled>{errorText}</InputErrorStyled>
      </InputWrapperStyled>
    ),
    [errorText]
  )

  const wrapperWithLabel: IConditionalWrapperProps['wrapper'] = useCallback(
    (children) => (
      <InputLabelStyled>
        <InputLabelTextStyled>{labelText}</InputLabelTextStyled>
        {children}
      </InputLabelStyled>
    ),
    [labelText]
  )

  return (
    <ConditionalWrapper isWrapping={!!errorText} wrapper={wrapperWithError}>
      <ConditionalWrapper isWrapping={!!labelText} wrapper={wrapperWithLabel}>
        <InputStyled value={value} onChange={onChange} {...props} />
      </ConditionalWrapper>
    </ConditionalWrapper>
  )
}
