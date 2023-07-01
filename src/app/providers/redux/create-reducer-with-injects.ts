import { combineReducers, ConfigureStoreOptions } from '@reduxjs/toolkit'

import { RootState } from 'app'

export function createReducerWithInjects(
  injectedReducers = {}
): ConfigureStoreOptions['reducer'] {
  if (Object.keys(injectedReducers).length === 0) {
    return (state: RootState) => state
  }

  return combineReducers({
    ...injectedReducers
    //  Statically injected reducers should be placed here
  })
}
