import styled from "styled-components";

export const AuthBody = styled.div`
  height: 100vh;
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  background: url('/static/img/bg.jpg') no-repeat 0 0;
  background-size: cover;
  padding-top: 0;
  right: auto;
`

export const AuthBarContent = styled.div`
  margin: 0 0 0 auto;
  //min-height: calc(100vh - 72px); //todo media
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  //width: 100%; //todo media phone
  width: 480px;
`

export const AuthBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //border-radius: 24px 24px 0 0; //todo media tablet style 
  background: #F9FAFF; 
`

export const AuthButton = styled.button.attrs({
    type: 'submit'
})`
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  margin: 17px auto 0 0;
  color: #FFF;
  background: url("/static/img/angle-right-b-icon.svg") no-repeat center right 22.29px #7297FF;
  border: none;
  border-radius: 8px;
  padding: 14px 48px 13px 16px;
`

export const ErrorMessage = styled.div`
  font-size: 13px;
  line-height: 120%;
  letter-spacing: -0.24px;
  color: #F6657F;
  margin-bottom: 14px;
`
