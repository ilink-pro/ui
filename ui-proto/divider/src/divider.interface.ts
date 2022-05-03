import { BoxProps } from '@ilink-ui-parts/layout'

export interface DividerProps extends Omit<BoxProps, 'height' | 'width'> {
  weight?: number | string | number[] | string[]
}
