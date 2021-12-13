import styled from "styled-components";

interface FlexProps {

    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'inherit' | 'initial' | 'unset'
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'inherit' | 'initial' | 'unset'
    justify?:
        'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'baseline' |
        'first baseline' | 'last baseline' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' |
        'safe center' | 'unsafe center' | 'inherit' | 'initial' | 'unset'
    margin?: string
    gap?: string
    padding?: string
}

export const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  gap: ${props => props.gap || 'auto'};
  padding: ${props => props.padding || '0'};
`
