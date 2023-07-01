import React, { FC } from 'react'

import { SignUpInputsStyled, SignUpStyled, SignUpTitleStyled } from './styled'
import { ISignUpProps } from './types'

export const SignUp: FC<ISignUpProps> = ({
  buttonSubmit,
  cityComponent,
  emailComponent,
  firstNameComponent,
  secondNameComponent
}) => (
  <SignUpStyled>
    <SignUpTitleStyled>SignUp your account</SignUpTitleStyled>

    <SignUpInputsStyled>
      {firstNameComponent}
      {secondNameComponent}
      {emailComponent}
      {cityComponent}
    </SignUpInputsStyled>

    {buttonSubmit}
  </SignUpStyled>
)
