import styled from "styled-components";

export const StyledUserCardPreloaded = styled.div`
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
  border-radius: 4px;
`

export const NameAndStatus = styled.div`
    
`

export const EmptyName = styled.div`

  height: 24px;
  width: 50%;
  padding-top: 0;
  background: #F9FAFF;
  border-radius: 4px;
`

export const EmptyStatus = styled.div`
  padding-left: 16px;
  background: #F9FAFF;
  border-radius: 4px;
  height: 12px;
  width: 90%;
  margin-top: 8px;
`

export const Status = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #A1ABC9;
  padding-top: 0;
  padding-bottom: 3px;
  padding-left: 16px;

  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Resolutions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
`

export const EmptyTime = styled.div`
  height: 24px;
  width: 100%;
  background: #F9FAFF;
  border-radius: 4px;
`

export const EmptyDescription = styled.div`
  margin-top: 16px;
  height: 63px;
  width: 100%;
  background: #F9FAFF;
  border-radius: 4px;
`

export const EmptyAvatar = styled.div`
  background-color: #F9FAFF;
  border-radius: 50%;
  height: 48px;
  width: 48px;
`
