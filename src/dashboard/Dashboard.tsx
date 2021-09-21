import { useCallback, useEffect } from "react";
import './style/style.css';
import { Table } from "../components/table/Table";
import { HeadDashboard } from "./components/head-dashboard/HeadDashboard";
import { headersTable } from "./const";
import { useDispatch, useSelector } from "react-redux";
import { selectorGetMode, selectorGetUsers } from "./selectors";
import { IUser } from "./types";
import { selectIsOpenModal } from "../components/modal-window/selectors";
import { ModalWindow } from "../components/modal-window/form/ModalWindowCreate";
import { keyUserModel } from "../components/modal-window/const";
import { DashboardActions } from "./reducer";
import { Dispatch } from "@reduxjs/toolkit";

export const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectorGetMode);
  const isOpen = useSelector(selectIsOpenModal);
  const data = useSelector(selectorGetUsers);

  useEffect(() => {
    console.log('хуй');
  }, [data])

  const deleteUserHandler = () => {
    dispatch(DashboardActions.setMode('deleteUser'));
  };

  const editionUserHandler = useCallback(() => {
    dispatch(DashboardActions.setMode('editUser'));
  }, [data]);

  const onSubmit = (model: IUser, dispatch: Dispatch) => {
    data.push(model);
    dispatch(DashboardActions.takeData(data));
  }
  
  const onClose = (dispatch: Dispatch) => {
    dispatch(DashboardActions.toggleModal());
  }

  return (
    <>
      <HeadDashboard />
      <Table
        headers={headersTable}
        children={data}
        editionUserHandler={editionUserHandler}
        deleteUserHandler={deleteUserHandler} />
      <ModalWindow
        mode={mode}
        keyUser={keyUserModel}
        fields={headersTable}
        onSubmit={onSubmit}
        onClose={onClose}
        isOpen={isOpen}/>
    </>
  )
};