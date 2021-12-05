import React, {useEffect} from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import Users from "./Users";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import {useDispatch} from "react-redux";
import {UserCabinetHeader} from "./UserCabinetSearch/UserCabinetHeader";
import {NavigationTabs} from "./NavigationTabs";
import {getCurrentUser} from "../../api/api";


const UserCabinetPage = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        getCurrentUser(token, dispatch)
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