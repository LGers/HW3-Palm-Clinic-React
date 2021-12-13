import React from 'react';
import {StyledEmptyPage} from "./userCabinetEmptyPage.styles";

const UserCabinetEmptyPage: React.FC = () => {
    return (
        <StyledEmptyPage>
            <img src="/static/img/empty_state.svg" alt="You don't have patients"/>
            <p>You have no patients yet.</p>
            <p>To create a patient profile? please contact your administrator.</p>
        </StyledEmptyPage>
    );
};
export default UserCabinetEmptyPage