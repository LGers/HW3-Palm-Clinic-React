import React from 'react';
import { Flex } from "../Flex/Flex";
import {
    HeaderUserAvatar,
    HeaderUserName,
    HeaderUserProfession,
    StyledHeader,
    UserStatusIcon
} from "./Header.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CABINET_PROFILE_PATH } from "../../constants/path";
import { Image } from '../Image';

export const Header: React.FC = (props) => {
    const userProfile = useSelector((state: RootState) => state.authUser.data)
    return (
      <StyledHeader {...props}>
          <Flex justify={'space-between'}>
              <img height={32} width={132} src="../../static/img/logo.png" alt="Palm Clinic Logo" />
              <Flex>
                  <div>
                      <HeaderUserName>{userProfile.first_name} {userProfile.last_name}</HeaderUserName>
                      <HeaderUserProfession>{userProfile.role_name}</HeaderUserProfession>
                  </div>
                  <HeaderUserAvatar to={CABINET_PROFILE_PATH}>
                      <Image src={userProfile.photo} alt={'avatar'} />
                      <UserStatusIcon />
                  </HeaderUserAvatar>
              </Flex>
          </Flex>
      </StyledHeader>
    )
};
