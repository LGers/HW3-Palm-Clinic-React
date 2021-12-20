import React from 'react';
import {Flex} from "../Flex/Flex";
import {HeaderUserAvatar, HeaderUserName, HeaderUserProfession, StyledHeader, UserStatusIcon} from "./Header.styles";
import {useSelector} from "react-redux";
import {RootState} from "../../store";



export const Header: React.FC = (props) => {
    const userProfile = useSelector((state: RootState) => state.authUser.data)

    return (
        <StyledHeader {...props}>
            <Flex justify={'space-between'}>
                <img height={32} width={132} src="../../static/img/logo.png" alt="Palm Clinic Logo"/>
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