export type Theme = any
export interface IComponentStyle {
  [key: string]: any
}
export interface ITheme {
  name: string
  description: string
  url: string
  author: string
  dependencies: string[]
  defs: {
    [name: string]: any
  }
  components: {
    [name: string]: IComponentStyle
  }
}
