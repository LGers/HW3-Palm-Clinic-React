import styled, {css} from "styled-components";
import {MEDIA_QUERY} from "../constants/mediaQuery";

export const StyledTab = styled.button`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  border-radius: 8px;
  border: none;
  padding: 15px 16px;
  cursor: pointer;
  width: ${props => props.width ? props.width + 'px' : '160px'};
  height: ${props => props.height ? props.height + 'px' : '40px'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  & svg {
    height: 20px;
  }
  
  ${props => props.primary && css`
    
    color: white;
    background-color:#7297FF;
    
    &:hover {
      background-color: #476CD3;
      transition: 0.3s ease-out;
    }
  `}

  ${props => props.secondary && css`
    font-weight: normal;
    line-height: 140%;
    color: #A1ABC9;
    background-color: #FFF;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.16);
    &:hover {
      background-color: #F9FAFF;
      transition: 0.3s ease-out;
    }
  `}

  ${props => props.disabled && css`
    color: white;
    background-color: #DCE0EC;
  `}

  ${props => props.leftIcon && css`
    & svg {
        margin-right: 16px;
    }
  `}

  ${props => props.rightIcon && css`
    & svg {
      margin-left: 16px;
    }
  `}
  
  @media ${MEDIA_QUERY.TABLET} {
    font-size: 17px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`