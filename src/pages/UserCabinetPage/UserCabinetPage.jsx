import React, {useEffect} from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import Users from "./Users";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import axios from "axios";
import {setLogonUser, setUserAppointments} from "../../store/userSlice";
import {useDispatch} from "react-redux";
import {UserCabinetHeader} from "./UserCabinetSearch/UserCabinetHeader";
import {NavigationTabs} from "./NavigationTabs";


const UserCabinetPage = (props) => {
    const dispatch = useDispatch()
    const token=localStorage.getItem('access_token')
    const apiUrl = 'https://reactlabapi.herokuapp.com/api/'

    useEffect(() => {
        axios.get(`${apiUrl}auth/profile`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                const userData = response.data
                dispatch(setLogonUser({userData}))

                const userRole = userData.role_name.toLowerCase()
                axios.get(`${apiUrl}appointments/${userRole}/me?offset=0&limit=100`,
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
                    <NavigationTabs/>
                    <UserCabinetHeader/>
                    <Users/>
                </UsersContent>
            </Content>
        </Wrapper>
    );
}

export default UserCabinetPage;