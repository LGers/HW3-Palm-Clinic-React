import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/mediaQuery";

export const StyledMainContent = styled.div`

  @media all {
    position: relative;
    padding: 0 24px 24px 24px;
    overflow: auto;
    height: 100%;
    background: #F9FAFF;
    box-shadow: 0 4px 32px rgba(218, 228, 255, 0.32);
    border-radius: 16px 16px 0px 0px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  
  @media only screen and (${MEDIA_QUERY.TABLET}) {
    border-radius: 16px;
  }
`
