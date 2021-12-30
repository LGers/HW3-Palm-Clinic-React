export type AuthPageProps = {
  link: string
}

export type AuthInputProps = {
  type: string
  name: string
  id: string,
  placeholder: string
  icon_url: string
}

export type AuthFormProps = {
  link: string
  showPassword?: never
  toggleShowPassword?: never
}

export type AuthRestorePasswordFormProps ={
  link: string
  showPassword?: any
  toggleShowPassword?: any
}

export type AuthFooterProps = {
  footerText: string,
  footerLink?: string
  footerLinkText?: string
}
