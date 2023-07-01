import { PayloadAction } from '@reduxjs/toolkit'

// eslint-disable-next-line no-restricted-imports
import { createSlice } from 'app/providers'

import { ISignUpContainerState } from './types'

export const initialState: ISignUpContainerState = {
  data: {
    form: {
      email: '',
      firstName: '',
      secondName: '',
      city: ''
    }
  }
}

const signUpContainerSlice = createSlice({
  name: 'signUpContainer',
  initialState,
  reducers: {
    setFormField(
      state,
      { payload }: PayloadAction<Partial<ISignUpContainerState['data']['form']>>
    ) {
      state.data.form = { ...state.data.form, ...payload }
    }
  }
})

export const {
  actions: signUpActions,
  name: signUpSliceKey,
  reducer: signUpReducer
} = signUpContainerSlice
