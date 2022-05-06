export interface Scheme {
  background: string
  font: string
  border?: string
}

export type ButtonColorSchemes = {
  [key: string]: {
    pressed: Scheme
    default: Scheme
    hover: Scheme
    disabled: Scheme
    [key: string]: Scheme
  }
}
