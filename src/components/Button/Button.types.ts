export type ButtonProps = {
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
}