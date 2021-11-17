import React from 'react';
import {Flex} from "../Flex";
import {HeaderUserAvatar, HeaderUserName, HeaderUserProfession, StyledHeader, UserStatusIcon} from "./headerStyles";


export const Header = (props) => {
    return (
        <StyledHeader>
            <Flex justify={'space-between'}>
                <img height={32} width={132} src="static/img/logo.png" alt="Palm Clinic Logo"/>
                <Flex>
                    <div>
                        <HeaderUserName>{props.name}</HeaderUserName>
                        <HeaderUserProfession>{props.profession}</HeaderUserProfession>
                    </div>

                    <HeaderUserAvatar>
                        <img src={props.avatar} alt="avatar"/>
                        <UserStatusIcon/>
                    </HeaderUserAvatar>
                </Flex>
            </Flex>
        </StyledHeader>
    )
};