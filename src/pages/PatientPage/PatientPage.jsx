import React from "react";
import {Content} from "../../components/Content/Content";
import {Header} from "../../components/Header/Header";
import {Wrapper} from "../../components/Wrapper/Wrapper";
import {Flex} from "../../components/Flex/Flex";
import {Tab} from "../../components/Tab/Tab";
import PatientSearch from "../DoctorPage/container/PatientsSearch";
import Patients from "../DoctorPage/container/Patients";
import PatientsEmptyPage from "../DoctorPage/container/PatientsEmptyPage";
import {UsersContent} from "../../components/UsersContent/UsersContent";


const PatientPage = (props) => {

    return (
        <Wrapper>
            <Content>

                <Header/>

                <UsersContent patients={props.doctors}>
                    <Flex gap={'0 24px'} padding={'40px 0'}>
                        <Tab secondary>Profile</Tab>
                        <Tab primary>Appointments</Tab>
                        <Tab secondary>Resolutions</Tab>
                    </Flex>

                    <PatientSearch/>
                    {props.doctors.length ? <Patients state={props.doctors}/> : <PatientsEmptyPage/>}
                </UsersContent>

            </Content>
        </Wrapper>
    );
}

export default PatientPage;