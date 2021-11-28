import styled from "styled-components";
import {MEDIA_QUERY} from "../../constants/mediaQuery";

export const StyledContainer = styled.div`
  @media all {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    
  }
  @media only screen and (${MEDIA_QUERY.TABLET}) {
    padding: 0 64px 48px 64px;
  }
`