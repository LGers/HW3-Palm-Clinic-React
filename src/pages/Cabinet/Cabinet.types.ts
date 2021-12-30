export type CabinetProps = {
  link: string
}
export type OptionType = {
  label: string
  value: string
}

export type ProfileType = {
  id: string
  first_name: string
  last_name: string
  photo: string
  role_name: string
}

export type ProfileEditFormProps = {
  setIsEditProfile: (isEditProfile: boolean) => void
}

export type ProfileHeaderProps = {
  isEditProfile: boolean
  handleEditProfile: () => void
}