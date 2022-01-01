import React, { useEffect, useState } from 'react';
import { FormContent, StyledProfile } from './Profile.styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import {
  doctorProfileValidationSchema,
  patientProfileValidationSchema
} from "../../../../validations/profileEdit.validation";
import { fetchDoctorProfile } from "../../../../store/auth/authSlice";
import { Form, Formik } from "formik";
import ProfileEditForm from "./ProfileEditForm";
import {
  fetchDoctorChangeProfile,
  fetchPatientChangeProfile
} from '../../../../store/profile/profileSlice';
import { ProfileHeader } from "./ProfileHeader";
import { Flex } from "../../../../components/Flex/Flex";
import {
  Name,
  NameAndStatus,
  Specialization
} from "../../../../components/UserCard/UserCard.styles";
import { Button } from "../../../../components/Button/Button";
import { Lock } from "react-feather";
import { ChangePasswordForm } from '../../../../components/ChangePasswordForm/ChangePasswordForm';
import { ProfileType } from '../../Cabinet.types';
import { Image } from '../../../../components/Image';

export const Profile: React.FC = (props) => {
  const dispatch = useDispatch()
  const profile: ProfileType = useSelector((state: RootState) => state.authUser.data)
  const {role_name, first_name, last_name, photo} = profile
  const specialization = useSelector((state: RootState) => state.authUser.occupation)
  const isDoctor = role_name === 'doctor'
  const initialValues = isDoctor
    ? {
      firstName: first_name,
      lastName: last_name,
      specialization: specialization
    }
    : {
      firstName: first_name,
      lastName: last_name,
    }

  const validationSchema = isDoctor ? doctorProfileValidationSchema : patientProfileValidationSchema

  const [isEditProfile, setIsEditProfile] = useState(false)
  const [isChangePassword, setIsChangePassword] = useState(false)

  useEffect(() => {
    isDoctor && dispatch(fetchDoctorProfile())
  }, [])

  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile)
  }
  const handleChangePassword = () => {
    setIsChangePassword(!isChangePassword)
  }

  return (
    <StyledProfile {...props}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          setSubmitting(false);
          isDoctor
            ? dispatch(fetchDoctorChangeProfile(values))
            : dispatch(fetchPatientChangeProfile(values))
        }}
      >
                {({
                      isSubmitting,
                  }) => (
                    // <ProfileEditForm/>
                    isEditProfile ? <ProfileEditForm setIsEditProfile={setIsEditProfile}/>
                        :
                        <FormContent>
                            <Form>
                                <ProfileHeader isEditProfile={isEditProfile} handleEditProfile={handleEditProfile}/>
                                <Flex direction={'column'}>
                                    <Flex justify={'flex-start'}>
                                      <Image src={photo} alt={'Profile Photo'} />
                                      <Flex justify={'space-between'} direction={'column'}>
                                        <NameAndStatus>
                                          <Name>{first_name} {last_name}</Name>
                                          {isDoctor && <Specialization>Therapist</Specialization>}
                                        </NameAndStatus>
                                        <Button secondary leftIcon onClick={handleChangePassword}>
                                          <Lock />Change password
                                        </Button>
                                      </Flex>
                                    </Flex>
                                </Flex>
                            </Form>
                        </FormContent>
                )}
            </Formik>
            {isChangePassword && <ChangePasswordForm handleChangePassword={handleChangePassword}/>}
        </StyledProfile>
    );
};
