export type Theme = any
export interface IComponentStyle {
  [key: string]: any
}
export interface ITheme {
  meta: {
    name: string
    description: string
    url: string
    author: string
  }
  dependencies: Record<any, any>
  tokens: {
    [name: string]: any
  }
}

interface SystemUIThemeSpecifications {
  borders?: { [name: string]: number }
  borderStyles?: { [name: string]: number }
  borderWidths?: { [name: string]: number }
  colors?: { [name: string]: string } | { modes?: { [name: string]: string } }
  fonts?: { [name: string]: string }
  fontSizes?: { [name: string]: number }
  fontWeights?: { [name: string]: number }
  letterSpacings?: { [name: string]: number }
  lineHeights?: { [name: string]: number }
  radii?: { [name: string]: number }
  space?: { [name: string]: number }
  sizes?: { [name: string]: number }
  transitionDurations?: { [name: string]: number }
  transitionTiming?: {
    [name: string]: {
      x1: number
      y1: number
      x2: number
      y2: number
    }
  }
  zIndices?: { [name: string]: number }
}
