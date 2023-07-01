import { Route, Routes as RoutesFromLib } from 'react-router-dom'

import { ERoutes } from 'app'

import HomePage from 'pages/home'
import LoginPage from 'pages/login'
import SignUpPage from 'pages/sign-up'

export const Routes = () => (
  // TODO: add lazy load with loader like example
  <RoutesFromLib>
    <Route Component={HomePage} path={ERoutes.Root} index />
    <Route Component={LoginPage} path={ERoutes.Login} />
    <Route Component={SignUpPage} path={ERoutes.SignUp} />
  </RoutesFromLib>
)
