import { RootState } from 'app'

import { initialState } from './slice'

export const getSignUpFormEmail = (state: RootState) =>
  state?.signUpContainer?.data.form.email || initialState.data.form.email

export const getSignUpFormCity = (state: RootState) =>
  state?.signUpContainer?.data.form.city || initialState.data.form.city

export const getSignUpFormFirstName = (state: RootState) =>
  state?.signUpContainer?.data.form.firstName ||
  initialState.data.form.firstName

export const getSignUpFormSecondName = (state: RootState) =>
  state?.signUpContainer?.data.form.secondName ||
  initialState.data.form.secondName
