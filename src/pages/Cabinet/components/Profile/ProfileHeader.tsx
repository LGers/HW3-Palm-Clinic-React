import React from 'react';
import { Title } from "../../../../components/Title/Title";
import { Flex } from "../../../../components/Flex/Flex";
import { Button } from "../../../../components/Button/Button";
import { Check, PenTool, X } from "react-feather";
import { StyledProfileHeader } from './Profile.styles';
import { ProfileHeaderProps } from '../../Cabinet.types';

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({isEditProfile, handleEditProfile}) => {
  return (
    <>
      {isEditProfile
        ?
        <StyledProfileHeader>
          <Title>Profile</Title>
          <Flex gap={'0 32px'}>
            <Button secondary leftIcon
                    onClick={handleEditProfile}><X />Cancel</Button>
            <Button primary leftIcon type={'submit'}><Check />Save</Button>
          </Flex>
        </StyledProfileHeader>
            :
            <StyledProfileHeader>
                <Title>Profile</Title>
                <Button primary leftIcon
                        onClick={handleEditProfile}><PenTool />Edit</Button>
            </StyledProfileHeader>
          }
      </>
    );
};