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
    const occupation = useSelector((state: RootState) => state.authUser.occupation)
    const isDoctor = profile.role_name === 'doctor'
    const initialValues = isDoctor
        ? {
            first_name: profile.first_name,
            last_name: profile.last_name,
            occupation: occupation
        }
        : {
            first_name: profile.first_name,
            last_name: profile.last_name,
        }

    const validationSchema = isDoctor ? doctorProfileValidationSchema : patientProfileValidationSchema

    useEffect(() => {
        if (isDoctor) {
            dispatch(fetchDoctorProfile())
        }
    }, [])

    return (
        <StyledProfile {...props}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting}) => {
                    setSubmitting(false);
                    console.log(JSON.stringify(values, null, 2))
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