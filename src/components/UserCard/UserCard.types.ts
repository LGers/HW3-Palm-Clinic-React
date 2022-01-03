import { AppointmentType } from '../../store/appointments/appointments.types';

export type UserCardProps = {
  appointment: AppointmentType
}

export interface StatusIconProps {
  status: 'confirmed' | 'canceled' | 'waiting'
}
