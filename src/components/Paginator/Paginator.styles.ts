import styled, { css } from 'styled-components';
import { PageButtonProps } from './Paginator.types';

export const StyledPaginator = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 140%;
  color: #A1ABC9;
  padding-top: 24px;
  padding-right: 24px;

  & p {
    padding-right: 56px;
  }

  & span {
    padding-right: 16px;
  }
`

export const Page = styled.button.attrs(props => ({
  disabled: props.disabled || false
}))<PageButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  width: 32px;
  height: 32px;
  margin: 1px;
  border-radius: 3px;
  border: none;
  background-color: transparent;
  color: #A1ABC9;

  ${props => (props.active) && css`
    background-color: #7297FF;
    color: #FFFFFF;
  `}

  ${props => (!props.disabled) && css`
    cursor: pointer;

    &:hover {
      color: #7297FF;
      border: 1px solid #7297FF;
      transition: 0.3s ease-out;
    }
  `}
`
