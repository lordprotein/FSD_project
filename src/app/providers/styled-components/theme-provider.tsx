import { FC, ReactNode, useMemo } from 'react'
import { ThemeProvider as ThemeProviderFromLib } from 'styled-components'

import { COLORS_STYLES } from './colors'
import { FONTS_STYLES } from './fonts'
import { IThemeContext } from './types'

export const ThemeProvider: FC<{ children: ReactNode[] | ReactNode }> = ({
  children
}) => {
  const defaultThemeData: IThemeContext = useMemo(
    () => ({ fonts: FONTS_STYLES, colors: COLORS_STYLES }),
    []
  )
  return (
    <ThemeProviderFromLib theme={defaultThemeData}>
      {children}
    </ThemeProviderFromLib>
  )
}
