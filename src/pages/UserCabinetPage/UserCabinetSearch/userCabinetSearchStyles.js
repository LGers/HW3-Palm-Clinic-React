import styled from "styled-components";

export const StyledUserCabinetSearch = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 46px;
  margin-bottom: 28px;
`

export const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 25px;
`

export const SearchLabel = styled.div`
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  color: #A1ABC9;
  justify-self: center;
  align-self: center;
`

export const SearchInput = styled.input`
  border: none;
  padding-left: 40px;
  font-size: 15px;
  background-color: transparent;
  background: url(../../../static/img/search.svg) no-repeat left 3px;
  background-size: 20px;
  background-position-y: center;
  background-position-x: 10px;

  &::placeholder {
    color: #A1ABC9;
  }

  &:focus {
    border-color: #7297FF;
    background-color: #fff;
  }
`