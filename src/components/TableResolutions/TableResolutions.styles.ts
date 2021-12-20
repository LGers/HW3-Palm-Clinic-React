import styled from "styled-components";

 const Table = styled.div`
   position: relative;
  font-weight: normal;
  font-size: 15px;
  line-height: 24px;
  
  display: grid;
  grid-template-columns: 3fr 3fr 6fr 2fr 2fr 2fr;
  padding: 20px 30px;
  //border: 1px solid black;//todo del it
  box-shadow: 0 4px 32px rgba(218, 228, 255, 0.24);
  border-radius: 12px;
  background-color: #FFF;
  margin-bottom: 4px;
  & div {
    display: flex;
    
    //border: 1px solid black; //todo del it
    padding: 0 10px;
    margin-right: 4px;
  }
`

export const TableHeader = styled(Table)`
  color: #A1ABC9;
  & div {
    cursor: pointer;
  }
`

export const TableRow = styled(Table)`
  color: #202225;
  & div {
    &:last-child {
      justify-content: flex-end;
    }
  }
`