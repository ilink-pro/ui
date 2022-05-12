import { InputProps as BaseInputProps } from '@ilink-ui-parts/input'

export type InputSize = 'small' | 'normal' | 'large'

export interface InputProps extends BaseInputProps {
  size?: InputSize
}
