import React from 'react';
import {Title} from "../../../../components/Title/Title";
import {Flex} from "../../../../components/Flex/Flex";
import {Button} from "../../../../components/Button/Button";
import {Check, PenTool, X} from "react-feather";
import {StyledProfileHeader} from './Profile.styles';

type Props = {
    isEditProfile: boolean
    handleClick: () => void
}
export const ProfileHeader: React.FC<Props> = ({isEditProfile, handleClick}) => {
    return (<>
            {isEditProfile
                ?
                <StyledProfileHeader>
                    <Title>Profile</Title>
                    <Flex gap={'0 32px'}>
                        <Button secondary leftIcon
                                onClick={handleClick}><X/>Cancel</Button>
                        <Button primary leftIcon type={'submit'}><Check/>Save</Button>
                    </Flex>
                </StyledProfileHeader>
                :
                <StyledProfileHeader>
                    <Title>Profile</Title>
                    <Button primary leftIcon
                            onClick={handleClick}><PenTool/>Edit</Button>
                </StyledProfileHeader>
            }
        </>
    );
};