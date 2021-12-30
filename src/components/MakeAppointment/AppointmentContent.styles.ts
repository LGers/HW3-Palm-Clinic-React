import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/mediaQuery";

export const StyledAppointmentContent = styled.div`
  display: grid;
  //grid-template-columns: 4fr 2fr 2fr;
  column-gap: 5.5%;

  @media all {
    ::-webkit-scrollbar {
      width: 0;
    }

    overflow: visible;
    //overflow-y: auto;
    //padding-left: 15px;
    //padding-right: 15px;
    //display: grid;
    //grid-gap: 5.5% 5.5%;
    //width: 100%;
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