export interface TextTransformProps {
  children: string
  upperCase?: boolean
  lowerCase?: boolean
  lastLetter?: boolean
  firstLetter?: boolean
  substr?: number | [number, number]
  replace?: [string, string]
}
