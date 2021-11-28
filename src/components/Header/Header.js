import React from 'react';
import {Flex} from "../Flex/Flex";
import {HeaderUserAvatar, HeaderUserName, HeaderUserProfession, StyledHeader, UserStatusIcon} from "./headerStyles";


export const Header = ({userProfile}) => {

    return (
        <StyledHeader>
            <Flex justify={'space-between'}>
                <img height={32} width={132} src="static/img/logo.png" alt="Palm Clinic Logo"/>
                <Flex>
                    <div>
                        <HeaderUserName>{userProfile.first_name} {userProfile.last_name}</HeaderUserName>
                        <HeaderUserProfession>{userProfile.role_name}</HeaderUserProfession>
                    </div>

                    <HeaderUserAvatar>
                        <img src={userProfile.photo} alt="avatar"/>
                        <UserStatusIcon/>
                    </HeaderUserAvatar>
                </Flex>
            </Flex>
        </StyledHeader>
    )
};