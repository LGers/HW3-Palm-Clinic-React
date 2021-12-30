import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.div`
  margin-top: auto;
  margin-right: auto;
  margin-left: 24px;
  padding-bottom: 44px;
  display: flex;
  align-items: flex-start;
`

export const StyledLink = styled(Link)`
  text-decoration-line: underline;
  color: #7297FF;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  padding-left: 20px;
  padding-top: 3px;
`