import { useDispatch } from "react-redux";
import { Button } from "../../../components/button/Button";
import { pluseIcon } from "../../../components/button/iconButton";
import { DashboardActions } from "../../reducer";
import './style/style.css';

export const HeadDashboard: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const openModalCreateUser = () => {
    dispatch(DashboardActions.setMode('createUser'));
    dispatch(DashboardActions.toggleModal());
    console.log('click work headDashboard')
  }

  return (
    <div className="dashboard__head">
      <h3>Пользователи</h3>
      <Button
        mode='button'
        icon={pluseIcon}
        onClick={openModalCreateUser}>Добавить</Button>
    </div>
  )
};