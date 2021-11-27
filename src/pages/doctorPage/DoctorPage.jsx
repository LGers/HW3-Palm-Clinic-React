import React from "react";
import {Wrapper} from "../../components/Wrapper";
import {Container} from "../../components/Container";
import {Header} from "../../components/Header/Header";
import {UsersContainer} from "../../components/UsersContainer";
import PatientSearch from "./container/PatientsSearch";
import Patients from "./container/Patients";
import PatientsEmptyPage from "./container/PatientsEmptyPage";
import {Flex} from "../../components/Flex";
import {Tab} from "../../components/Tab";

const DoctorPage = (props) => {

    return (
        <Wrapper>
            <Container>
                <Header
                    name={props.name}
                    profession={props.profession}
                    avatar={props.avatar}
                />

                <UsersContainer patients={props.patients}>
                    <Flex gap={'0 24px'} padding={'40px 0'}>
                        <Tab primary>Patients</Tab>
                        <Tab secondary>Resolutions</Tab>
                    </Flex>

                    <PatientSearch/>
                    {props.patients.length ? <Patients state={props.patients}/> : <PatientsEmptyPage/>}//проверку на верх вынести
                </UsersContainer>
            </Container>
        </Wrapper>
    );
}

export default DoctorPage;