import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  gap: ${props => props.gap || 'auto'};
  padding: ${props => props.padding || '0'};
`
