import { PayloadAction } from '@reduxjs/toolkit'

// eslint-disable-next-line no-restricted-imports
import { createSlice } from 'app/providers'

import { ILoginContainerState } from './types'

export const initialState: ILoginContainerState = {
  data: {
    form: {
      email: '',
      password: ''
    }
  }
}

const loginContainerSlice = createSlice({
  name: 'loginContainer',
  initialState,
  reducers: {
    setFormField(
      state,
      { payload }: PayloadAction<Partial<ILoginContainerState['data']['form']>>
    ) {
      state.data.form = { ...state.data.form, ...payload }
    },
    resetFormFieldPassword(state) {
      state.data.form.password = initialState.data.form.password
    }
  }
})

export const {
  actions: loginActions,
  name: loginSliceKey,
  reducer: loginReducer
} = loginContainerSlice
