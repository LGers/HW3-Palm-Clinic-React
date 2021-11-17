import React from "react";
import {Container} from "../../components/Container";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper";
import {Flex} from "../../components/Flex";
import {Tab} from "../../components/Tab";
import PatientSearch from "../doctorPage/container/PatientsSearch";
import Patients from "../doctorPage/container/Patients";
import PatientsEmptyPage from "../doctorPage/container/PatientsEmptyPage";
import {UsersContainer} from "../../components/UsersContainer";

const PatientPage = (props) => {

    return (
        <Wrapper>
            <Container>

                <Header
                    name={props.name}
                    profession={props.profession}
                    avatar={props.avatar}
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