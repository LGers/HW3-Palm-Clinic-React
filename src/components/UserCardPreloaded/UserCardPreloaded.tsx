import React from 'react';
import {
    EmptyAvatar,
    EmptyDescription,
    EmptyName,
    EmptyStatus,
    EmptyTime,
    StyledUserCardPreloaded,
    NameAndStatus, Resolutions, UserInfo
} from "./userCardPreloaded.styles";

export const UserCardPreloaded: React.FC = (props) => {
    return (
        <StyledUserCardPreloaded {...props}>
            <UserInfo>
                <EmptyAvatar/>
                <NameAndStatus>
                    <EmptyName/>
                    <EmptyStatus/>
                </NameAndStatus>
            </UserInfo>
            <Resolutions>
                <EmptyTime/>
                <EmptyDescription/>
            </Resolutions>
        </StyledUserCardPreloaded>
    )
};