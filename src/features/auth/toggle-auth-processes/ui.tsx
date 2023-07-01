import React, { useCallback, useState } from 'react'

import { ERoutes } from 'app'

import { Tabs } from 'shared/ui/tabs'

import { useChangeRoute, useGetInitActiveTab } from './lib'
import { TFakeAuthProcessId } from './types'

export const ToggleAuthProcesses = () => {
  // TODO: separate responsibilities
  const initialTab = useGetInitActiveTab()
  const [activeTabId, setActiveTabId] = useState(initialTab)
  const onChangeRoute = useChangeRoute()

  const handleClickTab = useCallback(
    (id: string) => {
      onChangeRoute(id as TFakeAuthProcessId)
      setActiveTabId(id as TFakeAuthProcessId)
    },
    [onChangeRoute]
  )

  return (
    <Tabs
      activeId={activeTabId}
      list={[
        { id: ERoutes.Login, name: 'Log In' },
        { id: ERoutes.SignUp, name: 'Sign Up' }
      ]}
      onClick={handleClickTab}
    />
  )
}
