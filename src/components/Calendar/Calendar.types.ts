export type CalendarProps = {
  onChange: any // todo any
  // onChange: (isoDate: string) => void // todo or Moment type
  isStepOneCompleted: boolean
}

export interface StyledDayProps {
  isToday: boolean
  isDayNotInCurrentMonth: boolean
}
