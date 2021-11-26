import styled from "styled-components";

export const StyledWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
export const StyledDay = styled.div`
  text-align: center;
  cursor: pointer;
  caret-color: transparent;

  & label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    background: #FFFFFF;
    box-shadow: 0px 4px 32px rgba(218, 228, 255, 0.24);
    border-radius: 8px;
    border: ${props => props.isToday ? '1px solid #7297FF': 'none'};
    width: 48px;
    height: 48px;
    caret-color: transparent;

    &:hover {
      color: #fff;
      background-color: #476CD3;
    }
  }

  
  & input:disabled + label {
    background: #DCE0EC;
    color: #fff;
    cursor: default;
  }

  & input:checked ~ label {
    color: #FFF;
    background-color: #7297FF;

    &:hover {
      color: #fff;
    }
  }

  & input {
    display: none
  }
`
export const StyledDayName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  caret-color: transparent;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #A1ABC9;
  width: 48px;
  height: 48px;
`
export const StyledCalendarHeader = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 48px;
`
export const StyledMonthYear = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: #000;
`

export const StyledMothNavigate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #A1ABC9;

  &:hover {
    color: #000;
  }
`