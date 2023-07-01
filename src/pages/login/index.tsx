import React from 'react'

import { LoginWidget } from 'widgets/login'

import { ToggleAuthProcesses } from 'features/auth'

import { LoginPageStyled } from './styled'

const LoginPage = () => (
  <LoginPageStyled>
    <ToggleAuthProcesses />

    <LoginWidget />
  </LoginPageStyled>
)
export default LoginPage
