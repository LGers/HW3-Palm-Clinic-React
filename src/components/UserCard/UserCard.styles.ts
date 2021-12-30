import styled, {css} from "styled-components";
interface StatusIconProps {
  status: 'confirmed' | 'canceled' | 'waiting'
}

export const StyledUserCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  max-width: 100%;
`
export const UserInfo = styled.div`
  padding: 19px 0 16px 24px;
  border-bottom: 1px solid rgba(220, 224, 236, 0.5);
  display: grid;
  grid-area: auto;
  grid-template-columns: 60px 1fr 30px;

  & img {
    padding-top: 5px;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
  }
`

export const NameAndStatus = styled.div`
  overflow: hidden;
`

export const Name = styled.p`
  font-weight: 600;
  font-size: 17px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 0;
  padding-bottom: 3px;
  padding-left: 16px;
`

export const Specialization = styled.p`
  display: flex;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #A1ABC9;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 16px;
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #A1ABC9;
  padding-top: 0px;
  padding-bottom: 3px;
  padding-left: 16px;
  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
export const StatusIcon = styled.div<StatusIconProps>`
  border-radius: 50%;
  width:  4px;
  padding: 4px;
  margin-right: 10px;

  background-color: #7297FF;

  ${props => props.status === 'confirmed' && css`
    background-color: #34C197;
  `}

  ${props => props.status === 'canceled' && css`
    background-color: #FF2567;
  `}
`

export const Resolutions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
`

export const Time = styled.p`
  display: flex;
  font-weight: 600;
  font-size: 15px;
  line-height: 130%;
  padding-bottom: 12px;
`

export const Description = styled.p`
  box-sizing: border-box;
  display: flex;
  font-size: 15px;
  line-height: 140%;
  padding-bottom: 24px;
  padding-top: 12px;
`

export const Icon = styled.span`
  color: #DCE0EC;
  height: 20px;
  margin-right: 14px;
`