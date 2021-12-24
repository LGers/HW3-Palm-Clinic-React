import React, {useEffect} from 'react';
import {StyledProfile} from './Profile.styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {
    doctorProfileValidationSchema,
    patientProfileValidationSchema
} from "../../../../validations/profileEdit.validation";
import {fetchDoctorProfile} from "../../../../store/auth/authSlice";
import {Formik} from "formik";
import ProfileEditForm from "./ProfileEditForm";
import { fetchDoctorChangeProfile, fetchPatientChangeProfile } from '../../../../store/profile/profileSlice';

type ProfileType = {
    id: string
    first_name: string
    last_name: string
    photo: string
    role_name: string
}
export const Profile: React.FC = (props) => {
    const dispatch = useDispatch()
    const profile: ProfileType = useSelector((state: RootState) => state.authUser.data)
    const {role_name, first_name, last_name, id} =profile
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

    useEffect(() => {
        isDoctor && dispatch(fetchDoctorProfile())
    }, [])

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
                    <ProfileEditForm/>
                )}
            </Formik>
        </StyledProfile>
    );
};