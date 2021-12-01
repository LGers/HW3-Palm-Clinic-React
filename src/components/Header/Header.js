import React, {useEffect} from 'react';
import {Flex} from "../Flex/Flex";
import {HeaderUserAvatar, HeaderUserName, HeaderUserProfession, StyledHeader, UserStatusIcon} from "./headerStyles";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setLogonUser} from "../../store/userSlice";


export const Header = () => {

    const dispatch = useDispatch()

    const getProfile = () => {
        return axios.get(`https://reactlabapi.herokuapp.com/api/auth/profile`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => ({response}))
            .catch(error =>
                console.log('error', error)
            )

    }

    useEffect(() => {
        axios.get('https://reactlabapi.herokuapp.com/api/auth/profile',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            .then(response => {
                const userData = response.data
                console.log('userData', userData)
                dispatch(setLogonUser({userData}))
            })
            .catch(error =>
                console.log('error', error)
            )
    }, [])

    const userProfile = useSelector(state => state.user.current_user)


    return (
        <StyledHeader>
            <Flex justify={'space-between'}>
                <img height={32} width={132} src="static/img/logo.png" alt="Palm Clinic Logo"/>
                <Flex>
                    <div>
                        <HeaderUserName>{userProfile.first_name} {userProfile.last_name}</HeaderUserName>
                        <HeaderUserProfession>{userProfile.role_name}</HeaderUserProfession>
                    </div>

                    <HeaderUserAvatar>
                        <img src={userProfile.photo} alt="avatar"/>
                        <UserStatusIcon/>
                    </HeaderUserAvatar>
                </Flex>
            </Flex>
        </StyledHeader>
    )
};