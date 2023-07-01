import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { configureAppStore } from './configure-store'

export const ReduxProvider: FC<{ children: ReactNode | ReactNode[] }> = ({
  children
}) => {
  const store = configureAppStore()

  return <Provider store={store}>{children}</Provider>
}
