import React from 'react';
import { Flex } from "../../components/Flex/Flex";
import { StyledError404, TextError } from './Error404Page.styles';
import { ERROR404 } from "../../constants/error404.dictionary";

export const Error404Page: React.FC = () => (
        <StyledError404>
            <Flex direction={'column'} justify={'center'} align={'center'}>
                <img src='../../static/img/error-404.png' alt={ERROR404.ALT}/>
                <TextError>
                    <p>{ERROR404.TEXT1}</p>
                    <p>{ERROR404.TEXT2}</p>
                </TextError>
            </Flex>
        </StyledError404>
    )
