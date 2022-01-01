import { ResolutionsType } from '../../store/resolutions/resolutions.types';

export type TableResolutionsProps = {
  resolutions: ResolutionsType[]
  userRole: 'doctor' | 'patient' | 'admin'
}

export type ResolutionProps = {
  resolutionData: ResolutionsType
}
