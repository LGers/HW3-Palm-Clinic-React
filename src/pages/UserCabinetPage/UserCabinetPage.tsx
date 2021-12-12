import React from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import {NavigationTabs} from "./NavigationTabs";
import Users from "./Users";
import {UserCabinetHeader} from "./UserCabinetSearch/UserCabinetHeader";
import {CreateResolutionModalWindow} from "../../components/CreateResolutionModalWindow/CreateResolutionModalWindow";

const UserCabinetPage = () => {

    return (
        <Wrapper>
            <Content>
                <Header/>
                <UsersContent>
                    <NavigationTabs/>
                    <UserCabinetHeader/>
                    <Users/>
                    {/*<CreateResolutionModalWindow name={''}/>*/}
                </UsersContent>
            </Content>
        </Wrapper>
    );
}

export default UserCabinetPage;