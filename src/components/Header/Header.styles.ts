import styled from "styled-components";
import {MEDIA_QUERY} from "../../constants/mediaQuery";
import {Link} from "react-router-dom";

interface AvatarProps  {
    to: string
}


export const StyledHeader = styled.div`
  @media all {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 130%;
    padding: 16px 24px;
  }

  @media only screen and (${MEDIA_QUERY.TABLET}) {
    padding: 16px 0;
  }
`

export const HeaderUserName = styled.div`
  @media all {
    display: none;
  }

  @media only screen and (${MEDIA_QUERY.TABLET}) {
    display: block;
    font-size: 15px;
    font-weight: 600;
    line-height: 130%;
    text-align: right;
  }
`

export const HeaderUserProfession = styled.div`
  @media all {
    display: none;
  }
  @media only screen and (${MEDIA_QUERY.TABLET}) {
    display: block;
    font-weight: 500;
    font-size: 13px;
    line-height: 130%;
    text-align: right;
    color: #A1ABC9;
  }
`

export const HeaderUserAvatar = styled(Link)<AvatarProps>`
  position: relative;

  &-icon {
    width: 8px;
    height: 8px;
    background-color: #34C197;
    border-radius: 50%;
    position: absolute;
    top: -3px;
    right: 0;
    border: 3px solid #E4EBFF;
  }

  & img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    margin-left: 15px;
  }
`

export const UserStatusIcon = styled.div`
  width: 12px;
  height: 12px;
  background-color: #34C197;
  border-radius: 50%;
  position: absolute;
  top: -3px;
  right: 0;
  border: 3px solid #E4EBFF;
`