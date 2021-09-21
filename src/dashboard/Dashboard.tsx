import { useCallback, useEffect } from "react";
import './style/style.css';
import { Table } from "../components/table/Table";
import { HeadDashboard } from "./components/head-dashboard/HeadDashboard";
import { headersTable } from "./const";
import { useDispatch, useSelector } from "react-redux";
import { selectorGetUsers } from "./selectors";
import { IDashboardState, IUser } from "./types";
import { selectIsOpenModal } from "../components/modal-window/selectors";
import { ModalWindowCreate } from "../components/modal-window/form/ModalWindowCreate";
import { keyUserModel } from "../components/modal-window/const";
import { DashboardActions } from "./reducer";
import { Dispatch } from "@reduxjs/toolkit";

export const Dashboard: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: IDashboardState) => selectIsOpenModal(state))
  const data = useSelector((state: IDashboardState) => selectorGetUsers(state))

  useEffect(() => {
    console.log('хуй');
  }, [data])

  const deleteUserHandler = () => {
    <ModalWindow mode='deleteUser' />
  };

  const editionUserHandler = useCallback(() => {
    <ModalWindow mode='updateUser' />
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
      <ModalWindowCreate
        keyUser={keyUserModel}
        fields={headersTable}
        onSubmit={onSubmit}
        onClose={onClose}
        isOpen={isOpen}/>
    </>
  )
};