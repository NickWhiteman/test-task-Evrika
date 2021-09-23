import { useEffect } from "react";
import './style/style.css';
import { Table } from "../components/table/Table";
import { HeadDashboard } from "./components/head-dashboard/HeadDashboard";
import { headersTable } from "./const";
import { useDispatch, useSelector } from "react-redux";
import { selectorGetMode, selectorGetUsers } from "./selectors";
import { selectIsOpenModal } from "../components/modal-window/selectors";
import { ModalWindow } from "../components/modal-window/ModalWindow";
import { data } from '../data';
import { DashboardActions } from "./reducer";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectorGetMode);
  const isOpen = useSelector(selectIsOpenModal);
  const dataForTable = useSelector(selectorGetUsers);

  useEffect(() => {
    console.log('ефект работает:', mode, isOpen, dataForTable);
    dispatch(DashboardActions.getUsers(data));
  });

  return (
    <>
      <HeadDashboard />
      <Table
        headers={headersTable}
        children={dataForTable}/>
      {
        isOpen &&
          <ModalWindow
            mode={mode}
            fields={headersTable}/>
      }
    </>
  )
};
