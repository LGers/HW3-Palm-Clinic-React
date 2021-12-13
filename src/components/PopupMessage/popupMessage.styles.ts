import styled from "styled-components";

interface Props {
    isSuccess:boolean
}

export const StyledPopupMessage = styled.div<Props>`
  //position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  
  left: 32px;
  bottom: 32px;
  width: 457px;
  height: 122px;
  background-color: ${props => props.isSuccess ? 'red' : '#34C197'};
  border-radius: 12px;
  font-style: normal;
  color: white;
`
export const StyledPopupTitle = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
`
export const StyledPopupText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
`