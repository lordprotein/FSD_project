import { COLORS_STYLES } from './colors'
import { FONTS_STYLES } from './fonts'

export interface IThemeContext {
  colors: typeof COLORS_STYLES
  fonts: typeof FONTS_STYLES
}
