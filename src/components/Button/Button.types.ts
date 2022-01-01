export type ButtonProps = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  type?: 'submit' | 'button'
  width?: number
  height?: number
  primary?: any
  secondary?: any
  isDisabled?: boolean
  leftIcon?: any
  rightIcon?: any
  variant?: 'primary' | 'secondary' | 'disabled'
  onClick?:()=>void
  /* eslint-enable @typescript-eslint/no-explicit-any */
}