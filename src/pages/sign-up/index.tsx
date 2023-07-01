import React from 'react'

import { SignUpWidget } from 'widgets/sign-up'

import { ToggleAuthProcesses } from 'features/auth'

import { SignUpPageStyled } from './styled'

const SignUpPage = () => (
  <SignUpPageStyled>
    <ToggleAuthProcesses />

    <SignUpWidget />
  </SignUpPageStyled>
)

export default SignUpPage
