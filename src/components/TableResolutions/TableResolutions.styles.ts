import styled from "styled-components";

export const Table = styled.div`
 overflow-y: auto;
`
const CommonTable = styled.div`
  position: relative;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  display: grid;
  grid-template-columns: 3fr 3fr 6fr 3fr 3fr 2fr;
  padding: 20px 30px;
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  background-color: #FFF;
  margin-bottom: 4px;


  & div {
   padding: 0 10px;
   margin-right: 4px;
  }
`

export const TableHeader = styled(CommonTable)`
  color: #A1ABC9;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`

export const StyledTableRow = styled(CommonTable)`
  color: #202225;

  & div {
    overflow: hidden;
    text-overflow: ellipsis;

    &:last-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border: none;
    }
  }
`

export const ActionButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  
  &:hover {
    background: #F9FAFF;
    border-radius: 6px;
    color: #7297FF;
  }
`