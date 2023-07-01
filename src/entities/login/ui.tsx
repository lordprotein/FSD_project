import React, { FC } from 'react'

import { LoginInputsStyled, LoginStyled, LoginTitleStyled } from './styled'
import { ILoginProps } from './types'

export const Login: FC<ILoginProps> = ({
  buttonSubmit,
  emailComponent,
  passwordComponent
}) => (
  <LoginStyled>
    <LoginTitleStyled>Login your account</LoginTitleStyled>

    <LoginInputsStyled>
      {emailComponent}
      {passwordComponent}
    </LoginInputsStyled>

    {buttonSubmit}
  </LoginStyled>
)
