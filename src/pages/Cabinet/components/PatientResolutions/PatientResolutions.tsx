import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import CabinetIsEmpty from "../CabinetIsEmpty/CabinetIsEmpty";
import {RootState} from "../../../../store";
import {fetchResolutions} from "../../../../store/resolutions/resolutionsSlice";
import {TableResolutions} from "../../../../components/TableResolutions/TableResolutions";

const PatientResolutions: React.FC = () => {
    const dispatch = useDispatch()
    const authUser = useSelector((state: RootState) => state.authUser)
    const userRole = authUser.data.role_name

    useEffect(() => {
        dispatch(fetchResolutions({userRole}))
    }, [userRole])

    const {resolutions, total, isFetching} = useSelector((state: RootState) => state.resolutions)

    return (
        <>
            {isFetching
                ? <p>Loading</p>
                : total
                    ? <TableResolutions resolutions={resolutions}/>
                    : <CabinetIsEmpty/>
            }
        </>
    );
};
export default PatientResolutions