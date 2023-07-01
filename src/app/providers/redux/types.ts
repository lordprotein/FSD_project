import {
  CreateSliceOptions,
  SliceCaseReducers,
  createSlice as createSliceOriginal
} from '@reduxjs/toolkit'

import { ILoginContainerState } from 'entities/login'
import { ISignUpContainerState } from 'entities/sign-up'

// eslint-disable-next-line @typescript-eslint/no-empty-interface

type RootStateKeyType = keyof RootState

export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends RootStateKeyType
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
) => createSliceOriginal(options)

export interface RootState {
  loginContainer?: ILoginContainerState
  signUpContainer?: ISignUpContainerState
}
