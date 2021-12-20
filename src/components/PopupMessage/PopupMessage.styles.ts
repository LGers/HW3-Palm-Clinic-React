import styled from "styled-components";

interface Props {
    isSuccess:boolean
}

export const StyledPopupMessage = styled.div<Props>`
  min-height: 122px;
  padding: 24px 32px;
  position: absolute;
  z-index: 999;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  align-items: flex-start;
  
  left: 32px;
  bottom: 32px;
  max-width: 457px;
  background-color: ${props => props.isSuccess ? '#34C197' : '#FF2567'};
  border-radius: 12px;
  font-style: normal;
  color: white;
`
export const PopupTitle = styled.h4`
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 8px;
`
export const PopupText = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
`
export const PopupCloseButton = styled.button`
  margin: 0 auto;
  color: white;
  background: none;
  border: none;
  width: 44px;
  height: 44px;
  cursor: pointer;
`