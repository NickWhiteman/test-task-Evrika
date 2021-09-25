import { useDispatch, useSelector } from "react-redux"
import { DashboardActions } from "../../dashboard/reducer";
import { selectorGetUsers } from "../../dashboard/selectors"
import { IUser } from "../../dashboard/types";
import { deleteUserHandler } from "../../data";
import { Button } from "../button/Button";
import { selectDeleteId } from "./selectors";

export const DeleteConfirm: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectorGetUsers);
  const userId = useSelector(selectDeleteId);
  const currentUser = users.find((user) => user.id === userId);

  const onClose = () => {
    dispatch(DashboardActions.toggleModal())
  };

  const onDelete = (id: number) => {
    let newUsers: IUser[] = users.filter(user => user.id !== id && user)
    dispatch(DashboardActions.setUsers(newUsers));
    dispatch(DashboardActions.toggleModal());
  };

  return (
    <>
      <div className='body__delete'>
        <h3>Удалить {`${currentUser?.firstName} ${currentUser?.lastName}`}?</h3>
      </div>
      <div className="footer__modal">
        <Button mode='button' onClick={onClose}>Close</Button>
        <Button mode='button' onClick={() => onDelete(userId)}>Delete</Button>
      </div>
    </>
  )
}