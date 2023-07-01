import {
  CreateSliceOptions,
  SliceCaseReducers,
  createSlice as createSliceOriginal
} from '@reduxjs/toolkit'

// eslint-disable-next-line @typescript-eslint/no-empty-interface

type RootStateKeyType = keyof RootState

export const createSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends RootStateKeyType
>(
  options: CreateSliceOptions<State, CaseReducers, Name>
) => createSliceOriginal(options)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
