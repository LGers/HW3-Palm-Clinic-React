import React from 'react';
import {EmptyCabinet} from "./CabinetIsEmpty.styles";

const CabinetIsEmpty: React.FC = () => {
    return (
        <EmptyCabinet>
            <img src="/static/img/empty_state.svg" alt="You don't have patients"/>
            <p>You have no patients yet.</p>
            <p>To create a patient profile? please contact your administrator.</p>
        </EmptyCabinet>
    );
};
export default CabinetIsEmpty