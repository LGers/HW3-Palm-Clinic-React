import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CabinetIsEmpty from "../CabinetIsEmpty/CabinetIsEmpty";
import { RootState } from "../../../../store";
import { fetchResolutions } from "../../../../store/resolutions/resolutionsSlice";
import { TableResolutions } from "../../../../components/TableResolutions/TableResolutions";
import { CabinetHeader } from "../CabinetHeader/CabinetHeader";
import { Paginator } from '../../../../components/Paginator/Paginator';
import { RESOLUTIONS_LIMIT } from '../../../../constants/constants';

const Resolutions: React.FC = () => {
    const dispatch = useDispatch()
    const authUser = useSelector((state: RootState) => state.authUser)
    const userRole = authUser.data.role_name
    const roleNameInRequest = authUser.roleNameInRequest
    useEffect(() => {
        dispatch(fetchResolutions({userRole, offset: 0}))
    }, [userRole])

    const {resolutions, total, isFetching} = useSelector((state: RootState) => state.resolutions)

    const handleChangePage = (page: number) => {
        dispatch(fetchResolutions({userRole, offset: (page-1)*RESOLUTIONS_LIMIT}))
    }

    return (
      <>
          <CabinetHeader />
          {isFetching
            ? <p>Loading</p>
            : total
              ? <TableResolutions resolutions={resolutions} userRole={roleNameInRequest} />
              : <CabinetIsEmpty />
          }
          <Paginator total={Number(total)}
                     onChange={(page: number) => handleChangePage(page)}
          />
      </>
    );
};

export default Resolutions
