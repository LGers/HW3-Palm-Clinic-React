import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/mediaQuery";

export const StyledAppointmentContent = styled.div`
  display: grid;
  column-gap: 5.5%;

  @media all {
    ::-webkit-scrollbar {
      width: 0;
    }
    overflow: visible;
    grid-template-columns: 1fr;
  }
  @media only screen and (${MEDIA_QUERY.TABLET}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (${MEDIA_QUERY.SMALL_DESKTOP}) {
    ::-webkit-scrollbar {
      width: 12px;
    }
    grid-template-columns: 4fr 2fr 2fr;
  }
  @media only screen and (${MEDIA_QUERY.DESKTOP}) {
    grid-template-columns: 4fr 2fr 2fr;
  }
`
