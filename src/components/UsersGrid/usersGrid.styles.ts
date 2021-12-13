import styled from "styled-components";
import {MEDIA_QUERY} from "../../constants/mediaQuery";

export const StyledGrid = styled.div`
  
  @media all {
    ::-webkit-scrollbar {
      width: 0;
    }
    
    overflow-y: auto;
    padding-left: 15px;
    padding-right: 15px;
    display: grid;
    grid-gap: 24px 20px;
    width: 100%;
    grid-template-columns: 1fr;
  }
  @media only screen and (${MEDIA_QUERY.TABLET}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (${MEDIA_QUERY.SMALL_DESKTOP}) {
    ::-webkit-scrollbar {
      width: 12px;
    }
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (${MEDIA_QUERY.DESKTOP}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`