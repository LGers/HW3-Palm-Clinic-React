import React from 'react';
import {
    EmptyAvatar,
    EmptyDescription,
    EmptyName,
    EmptyStatus,
    EmptyTime,
    StyledUserCardPreloaded
} from "./userCardPreloaded.styles";
import {NameAndStatus, Resolutions, UserInfo} from "../UserCard/userCard.styles";

export const UserCardPreloaded = () => {
    return (
        <StyledUserCardPreloaded>
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