import React, {useEffect} from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {Flex} from "../../components/Flex/Flex";
import {Tab} from "../../components/Tab/Tab";
import PatientSearch from "../test/DoctorPage/container/PatientsSearch";
import Users from "./Users";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import axios from "axios";
import {setLogonUser, setUserAppointments} from "../../store/userSlice";
import {useDispatch} from "react-redux";


const UserCabinetPage = (props) => {
    const dispatch = useDispatch()
    const token=localStorage.getItem('access_token')

    useEffect(() => {
        axios.get('https://reactlabapi.herokuapp.com/api/auth/profile',
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                const userData = response.data
                dispatch(setLogonUser({userData}))

                const userRole = userData.role_name.toLowerCase()
                axios.get(`https://reactlabapi.herokuapp.com/api/appointments/${userRole}/me?offset=0&limit=100`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    .then(response => {
                        const userAppointments = response.data
                        dispatch(setUserAppointments({userAppointments}))
                    })
                    .catch(error =>
                        console.log('error', error)
                    )
            })
            .catch(error =>
                console.log('error', error)
            )
    }, [])

    return (
        <Wrapper>
            <Content>
                <Header/>
                <UsersContent>
                    <Flex gap={'0 24px'} padding={'40px 0'}>
                        <Tab secondary>Profile</Tab>
                        <Tab primary>Appointments</Tab>
                        <Tab secondary>Resolutions</Tab>
                    </Flex>
                    <PatientSearch/>
                    <Users/>
                </UsersContent>
            </Content>
        </Wrapper>
    );
}

export default UserCabinetPage;