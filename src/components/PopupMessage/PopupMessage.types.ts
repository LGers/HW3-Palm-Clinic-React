export type PopupMessageProps = {
  title: string
  message: string
  isSuccess: boolean
  onClose: () => void
}

export interface StyledPopupMessageProps {
  isSuccess:boolean
}