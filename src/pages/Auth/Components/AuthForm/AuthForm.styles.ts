import { Form } from "formik"
import styled from "styled-components"

export const StyledAuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
`

export const ForgotPassword = styled.div`
  margin-top: 32px;
  color: #7297FF;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  & a {
    margin-top: 32px;
    color: #7297FF;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
`
export const ForgotPasswordSent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 24px;
`

export const AuthText = styled.p`
  font-size: 15px;
  line-height: 140%;
  color: #A1ABC9;
  margin-bottom: 24px;
`

export const Email = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 130%;
  color: #7297FF;
`
export const AuthTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`
