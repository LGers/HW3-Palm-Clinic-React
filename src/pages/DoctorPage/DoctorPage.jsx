import React from "react";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {UsersContent} from "../../components/UsersContent/UsersContent";
import PatientSearch from "./container/PatientsSearch";
import Patients from "./container/Patients";
import PatientsEmptyPage from "./container/PatientsEmptyPage";
import {Flex} from "../../components/Flex/Flex";
import {Tab} from "../../components/Tab/Tab";

const DoctorPage = (props) => {

    return (
        <Wrapper>
            <Content>
                <Header
                    name={props.name}
                    profession={props.profession}
                    avatar={props.avatar}
                />

                <UsersContent patients={props.patients}>
                    <Flex gap={'0 24px'} padding={'40px 0'}>
                        <Tab primary>Patients</Tab>
                        <Tab secondary>Resolutions</Tab>
                    </Flex>

                    <PatientSearch/>
                    {props.patients.length ? <Patients state={props.patients}/> : <PatientsEmptyPage/>}//проверку на верх вынести
                </UsersContent>
            </Content>
        </Wrapper>
    );
}

export default DoctorPage;