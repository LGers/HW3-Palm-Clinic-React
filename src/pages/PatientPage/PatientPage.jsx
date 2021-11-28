import React, {useEffect, useState} from "react";
import {Container} from "../../components/Container/Container";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {Flex} from "../../components/Flex/Flex";
import {Tab} from "../../components/Tab/Tab";
import PatientSearch from "../DoctorPage/container/PatientsSearch";
import Patients from "../DoctorPage/container/Patients";
import PatientsEmptyPage from "../DoctorPage/container/PatientsEmptyPage";
import {UsersContainer} from "../../components/UsersContainer/UsersContainer";
import axios from "axios";

// let  userProfile={}



const PatientPage = (props) => {

    const initialUserProfile ={
        first_name: '',
        last_name:'',
        photo: '',
        role_name: 'Patient'
    }

    const [userProfile, setUserProfile] = useState(initialUserProfile)

    useEffect(() => {
        axios.get('https://reactlabapi.herokuapp.com/api/auth/profile',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => {
                setUserProfile(response.data)
                console.log(response.data)
            })
            .catch(error =>
                console.log(error)
            )
    }, [setUserProfile])

    return (
        <Wrapper>
            <Container>

                <Header
                    userProfile={userProfile}
                />

                <UsersContainer patients={props.doctors}>
                    <Flex gap={'0 24px'} padding={'40px 0'}>
                        <Tab secondary>Profile</Tab>
                        <Tab primary>Appointments</Tab>
                        <Tab secondary>Resolutions</Tab>
                    </Flex>

                    <PatientSearch/>
                    {props.doctors.length ? <Patients state={props.doctors}/> : <PatientsEmptyPage/>}
                </UsersContainer>

            </Container>
        </Wrapper>
    );
}

export default PatientPage;