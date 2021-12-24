import {ErrorMessage, Form} from 'formik';
import React, {useState} from 'react';
import {Flex} from '../../../../components/Flex/Flex';
import {Button} from "../../../../components/Button/Button";
import {Lock} from 'react-feather';
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {Name, NameAndStatus, Specialization} from "../../../../components/UserCard/UserCard.styles";
import {FormContent} from "./Profile.styles";
import {StyledAppointmentField} from "../../../CreateAppointment/CreateAppointmentSelects.styles";
import {ProfileHeader} from "./ProfileHeader";

const ProfileEditForm: React.FC = () => {
    const profile = useSelector((state: RootState) => state.authUser.data)
    const {photo, first_name, last_name, role_name}=profile
    const [isEditProfile, setIsEditProfile] = useState(false)
    const isDoctor = role_name === 'doctor'

    const handleClick = () => {
        setIsEditProfile(!isEditProfile)
    }
    return (
        <FormContent>
            {isEditProfile
                ? <Form>
                    <ProfileHeader isEditProfile={isEditProfile} handleEditProfile={handleClick}/>

                    <Flex>
                        <img src={photo} alt={'Profile Photo'}/>
                        <Flex align={'flex-end'} gap={'0 32px'}>
                            <Flex direction={'column'}>
                                <label htmlFor={'firstName'}>First Name</label>
                                <StyledAppointmentField
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                />
                                <ErrorMessage name="firstName" component="div"/>
                            </Flex>

                            <Flex direction={'column'}>
                                <label htmlFor={'lastName'}>Last Name</label>
                                <StyledAppointmentField
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                />
                                <ErrorMessage name="lastName" component="div"/>
                            </Flex>
                            {isDoctor &&
                            <Flex direction={'column'}>
                                <label htmlFor={'specialization'}>Occupation</label>
                                <StyledAppointmentField
                                    type="text"
                                    id="specialization"
                                    name="specialization"
                                />
                                <ErrorMessage name="specialization" component="div"/>
                            </Flex>
                            }
                        </Flex>
                    </Flex>
                </Form>

                : <Form>
                    <Flex direction={'column'}>
                        <ProfileHeader isEditProfile={isEditProfile} handleEditProfile={handleClick}/>
                        <Flex justify={'flex-start'}>
                            <img src={photo} alt={'Profile Photo'}/>
                            <Flex justify={'space-between'} direction={'column'}>
                                <NameAndStatus>
                                    <Name>{first_name} {last_name}</Name>
                                    {isDoctor && <Specialization>Therapist</Specialization>}
                                </NameAndStatus>
                                <Button secondary leftIcon><Lock/>Change password</Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Form>
            }

        </FormContent>
    );
};

export default ProfileEditForm