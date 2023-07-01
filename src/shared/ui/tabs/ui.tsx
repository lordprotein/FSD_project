import { FC } from 'react'

import { TabsStyled, TabStyled } from './styled'
import { ITabProps, ITabsProps } from './types'

export const Tabs: FC<ITabsProps> = ({ activeId, list, onClick }) => (
  <TabsStyled>
    {list.map((tab) => (
      <Tab
        key={tab.id}
        isActive={tab.id === activeId}
        onClick={() => {
          onClick(tab.id)
        }}
      >
        {tab.name}
      </Tab>
    ))}
  </TabsStyled>
)

const Tab: FC<ITabProps> = ({ children, isActive, onClick }) => (
  <TabStyled $isActive={!!isActive} onClick={onClick}>
    {children}
  </TabStyled>
)
