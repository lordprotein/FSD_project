import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'

import { createReducerWithInjects } from './create-reducer-with-injects'

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware({})
  const runSaga = sagaMiddleware.run
  const additionalMiddleware = [sagaMiddleware]

  return configureStore({
    reducer: createReducerWithInjects(),
    enhancers: [
      createInjectorsEnhancer({
        createReducer: createReducerWithInjects as Parameters<
          typeof createInjectorsEnhancer
        >[0]['createReducer'],
        runSaga
      })
    ],
    middleware: new MiddlewareArray().concat(additionalMiddleware),
    devTools: {
      shouldHotReload: true
    }
  })
}
