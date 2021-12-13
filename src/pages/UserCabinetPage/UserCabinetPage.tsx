import React from "react";
import {Header} from "../../components/Header/Header";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import {NavigationTabs} from "./NavigationTabs";
import Users from "./Users";
import {UserCabinetHeader} from "./UserCabinetSearch/UserCabinetHeader";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import { Content } from "../../components/Content/Content";

const UserCabinetPage: React.FC = () => {

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