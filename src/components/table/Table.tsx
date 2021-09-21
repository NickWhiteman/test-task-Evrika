import React from "react";
import './style/style.css';
import { ITableProps } from "./types"
import { Button } from "../button/Button"
import { bucketIcon, pencilIcon } from "../button/iconButton"
import { useDispatch } from "react-redux";
import { DashboardActions } from "../../dashboard/reducer";

export const Table: React.FC<Partial<ITableProps>> = React.memo(({
  children,
  headers,
}) => {
  const dispatch = useDispatch();

  const deleteUserHandler = (id: number) => {
    dispatch(DashboardActions.setMode('deleteUser'));
    dispatch(DashboardActions.deleteUserId(id));
    dispatch(DashboardActions.toggleModal());
  };

  const editionUserHandler = () => {
    dispatch(DashboardActions.setMode('editUser'));
    dispatch(DashboardActions.toggleModal());
  };
  return (
    <table className='dashboard__table'>
      <tr className='dashboard__table__row'>
        {
          headers &&
          headers.map((item, index) => (
            <th
              key={index + 1}
              className='dashboard__table__row__header'>{item}</th>
          ))
        }
      </tr>
      {
        children &&
        children.map((info) => (
          <tr key={info.id}>
            <td className='dashboard__table__row__itemColumn'>{info.firstName}</td>
            <td className='dashboard__table__row__itemColumn'>{info.lastName}</td>
            <td className='dashboard__table__row__itemColumn'>{info.fatherName}</td>
            <td className='dashboard__table__row__itemColumn'>{info.email}</td>
            <td className='dashboard__table__row__itemColumn'>{info.login}</td>
            <td className='dashboard__table__row__itemColumn buttons'>
              <Button
                mode='row-button'
                children={pencilIcon}
                onChange={editionUserHandler}/>
              <Button
                mode='row-button'
                children={bucketIcon}
                onChange={() => deleteUserHandler(info.id)}
              />
            </td>
          </tr>
        ))
      }
    </table>
  )
});