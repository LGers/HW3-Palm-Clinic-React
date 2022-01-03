import styled from "styled-components";
import { MEDIA_QUERY } from '../../constants/mediaQuery';

export const StyledTimeSlots = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 5px 5px;
  max-width: 464px;

  @media only screen and (${MEDIA_QUERY.TABLET}) {
    gap: 16px 16px;
  }
`
