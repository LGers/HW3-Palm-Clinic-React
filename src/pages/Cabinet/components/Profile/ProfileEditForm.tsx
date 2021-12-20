import {ErrorMessage, Form} from 'formik';
import React, {useState} from 'react';
import {Flex} from '../../../../components/Flex/Flex';
import {Title} from "../../../../components/Title/Title";
import {Button} from "../../../../components/Button/Button";
import {Lock, PenTool, X} from 'react-feather';
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {Name, NameAndStatus, Specialization} from "../../../../components/UserCard/UserCard.styles";
import {FormContent, ProfileHeader} from "./Profile.styles";
import {StyledAppointmentField} from "../../../CreateAppointment/CreateAppointmentSelects.styles";

const ProfileEditForm: React.FC = () => {
    const profile = useSelector((state: RootState) => state.authUser.data)
    const [isEditProfile, setIsEditProfile] = useState(false)
    const handleClick = () => {
        setIsEditProfile(!isEditProfile)
    }
    return (
        <FormContent>
            {isEditProfile
                ? <Form>
                    <ProfileHeader>
                        <Title>Profile</Title>
                        <Flex>
                            <Button secondary={'secondary'} leftIcon={'X'}
                                    onClick={handleClick}><X/>Cancel</Button>
                            <button type="submit">
                                Save
                            </button>
                        </Flex>
                    </ProfileHeader>

                    <Flex>
                        <img src={profile.photo} alt={'Profile Photo'}/>
                        <Flex align={'flex-end'} gap={'0 32px'}>
                            <Flex direction={'column'}>
                                <label htmlFor={'first_name'}>First Name</label>
                                <StyledAppointmentField
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                />
                                <ErrorMessage name="first_name" component="div"/>
                            </Flex>

                            <Flex direction={'column'}>
                                <label htmlFor={'last_name'}>Last Name</label>
                                <StyledAppointmentField
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                />
                                <ErrorMessage name="last_name" component="div"/>
                            </Flex>
                            <Flex direction={'column'}>
                                <label htmlFor={'occupation'}>Occupation</label>
                                <StyledAppointmentField
                                    type="text"
                                    id="occupation"
                                    name="occupation"
                                />
                                <ErrorMessage name="occupation" component="div"/>
                            </Flex>
                        </Flex>

                    </Flex>
                </Form>

                : <Form>
                    <Flex direction={'column'}>
                        <ProfileHeader>
                            <Title>Profile</Title>
                            <Button primary={'primary'} leftIcon={'pencil'}
                                    onClick={handleClick}><PenTool/>Edit</Button>
                        </ProfileHeader>
                        <Flex justify={'flex-start'}>
                            <img src={profile.photo} alt={'Profile Photo'}/>
                            <Flex justify={'space-between'} direction={'column'}>
                                <NameAndStatus>
                                    <Name>{profile.first_name} {profile.last_name}</Name>
                                    <Specialization>Therapist</Specialization>{/*//todo delete it*/}
                                    {profile.role_name === 'doctor' && <Specialization>Therapist</Specialization>}
                                </NameAndStatus>
                                <Button secondary={'secondary'} leftIcon={'pencil'}><Lock/>Change password</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Form>
            }

        </FormContent>


    );
};

export default ProfileEditForm