import React from 'react';
import {Flex} from "../../components/Flex/Flex";
import { StyledError404, TextError } from './Error404Page.styles';

export const Error404Page: React.FC = () => {
    return (
        <StyledError404>
            <Flex direction={'column'} justify={'center'} align={'center'}>
                <img src='../../static/img/error-404.png' alt="404 error. Page not found"/>
                <TextError>
                    <p>Oops..</p>
                    <p>We can't seem to find the page you are looking for.</p>
                </TextError>
            </Flex>
        </StyledError404>
    )
};