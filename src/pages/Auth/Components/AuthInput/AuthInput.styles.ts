import styled from "styled-components";
import {Field} from "formik";

export const AuthInputContent =styled.div`
  position: relative;
`

export const StyledAuthInput = styled(Field).attrs(props => ({
    type: props.passwordInputType || props.type,
    name: props.name,
    id: props.id,
    placeholder: props.placeholder
}))`
  padding: 16px 24px 16px 64px;
  width: 100%;
  background: #FFFFFF;
  border: ${props => props.error ? '1px solid #F6657F': '1px solid #DCE0EC'};
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.16);
  border-radius: 8px;
  font-size: 17px;
  line-height: 24px;
  color: #202225;
  margin-bottom: 24px;
  
  &:focus {
    border: 1px solid #7297FF;
  }
  
  &:hover {
    border: 1px solid #7297FF;
  }
`
interface Props {
    iconUrl: string
}

export const InputIcon = styled.div<Props>`
  position: absolute;
  top: 10px;
  left: 5px;
  height: 40px;
  width: 40px;
  background: url(${props => props.iconUrl}) no-repeat;
  background-position-y: center;
  background-position-x: 18px;
`

export const ShowPasswordButton = styled.div`
  border: none;
  cursor: pointer;
  position: absolute;
  right: 7%;
  width: 20px;
  height: 20px;
  top: 29px;
  transform: translate(0,-50%);
  background: url("/static/img/eye-icon.svg") no-repeat center;
  background: url("/static/img/eye-slash-icon.svg") no-repeat center;
  background-size: 20px;
`