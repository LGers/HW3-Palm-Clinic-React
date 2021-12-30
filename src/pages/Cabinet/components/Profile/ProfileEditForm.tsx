import { ErrorMessage, Form } from 'formik';
import React from 'react';
import { Flex } from '../../../../components/Flex/Flex';
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { FormContent } from "./Profile.styles";
import { StyledAppointmentField } from "../../../CreateAppointment/CreateAppointmentSelects.styles";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileEditFormProps } from '../../Cabinet.types';

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({setIsEditProfile}) => {
    const profile = useSelector((state: RootState) => state.authUser.data)
    const {photo, role_name} = profile
    const isDoctor = role_name === 'doctor'

    const handleClick = () => {
        setIsEditProfile(false)
    }
    return (
      <FormContent>
          <Form>
              <ProfileHeader isEditProfile={true} handleEditProfile={handleClick} />
              <Flex>
                  <img src={photo} alt={'Profile Photo'} />
                  <Flex align={'flex-end'} gap={'0 32px'}>
                      <Flex direction={'column'}>
                          <label htmlFor={'firstName'}>First Name</label>
                          <StyledAppointmentField
                            type="text"
                            id="firstName"
                            name="firstName"
                          />
                          <ErrorMessage name="firstName" component="div" />
                      </Flex>

                      <Flex direction={'column'}>
                          <label htmlFor={'lastName'}>Last Name</label>
                          <StyledAppointmentField
                            type="text"
                            id="lastName"
                            name="lastName"
                          />
                          <ErrorMessage name="lastName" component="div" />
                      </Flex>
                      {isDoctor &&
                      <Flex direction={'column'}>
                          <label htmlFor={'specialization'}>Occupation</label>
                          <StyledAppointmentField
                            type="text"
                            id="specialization"
                            name="specialization"
                          />
                          <ErrorMessage name="specialization" component="div" />
                      </Flex>
                      }
                  </Flex>
                    </Flex>
                </Form>
        </FormContent>
    );
};

export default ProfileEditForm