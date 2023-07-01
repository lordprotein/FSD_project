import React from 'react'

import {
  ReduxProvider,
  GlobalStyles,
  ThemeProvider,
  RouterProvider,
  ErrorBoundary
} from './providers'

export const App = () => (
  <ErrorBoundary>
    <ReduxProvider>
      <ThemeProvider>
        <GlobalStyles />
        <RouterProvider />
      </ThemeProvider>
    </ReduxProvider>
  </ErrorBoundary>
)
