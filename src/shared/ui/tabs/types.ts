export interface ITabsProps {
  list: Array<{
    id: string
    name: ITabProps['children']
  }>
  activeId: string
  onClick: (id: string) => void
}

export interface ITabProps {
  children: string
  onClick: () => void
  isActive?: boolean
}
