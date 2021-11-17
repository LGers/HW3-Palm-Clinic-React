import React from 'react';
import styled from "styled-components";

const StyledTextBold = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 130%;
  color: #000000;
  padding-bottom: 16px;
`

export const TextNormal = (props) => {
    return <StyledTextBold {...props}/>
};