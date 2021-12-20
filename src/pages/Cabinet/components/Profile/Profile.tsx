import React, {useEffect} from 'react';
import {StyledProfile} from './Profile.styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../store";
import {profileValidationSchema} from "../../../../validations/profileEdit.validation";
import {fetchDoctorProfile} from "../../../../store/auth/authSlice";
import {Formik} from "formik";
import ProfileEditForm from "./ProfileEditForm";

type Profile = {
    id: string
    first_name: string
    last_name: string
    photo: string
    role_name: string
}
export const Profile: React.FC = (props) => {
    const profile: Profile = useSelector((state: RootState) => state.authUser.data)
    // const [isEditProfile, setIsEditProfile] = useState(false)
    // const handleClick = () => {
    //     setIsEditProfile(!isEditProfile)
    // }

    const dispatch = useDispatch()
    useEffect(() => {
        if (profile.role_name === 'doctor') {
            dispatch(fetchDoctorProfile())
        }
    }, [])


    return (
        <>
            <StyledProfile {...props}>
                <Formik
                    initialValues={{
                        first_name: profile.first_name,
                        last_name: profile.last_name,
                        occupation: 'profile.occupation'
                    }}
                    validationSchema={profileValidationSchema}
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
        </>
    );
};