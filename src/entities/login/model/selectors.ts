import { RootState } from 'app'

import { initialState } from './slice'

export const getLoginFormEmail = (state: RootState) =>
  state?.loginContainer?.data.form.email || initialState.data.form.email

export const getLoginFormPassword = (state: RootState) =>
  state?.loginContainer?.data.form.password || initialState.data.form.password
