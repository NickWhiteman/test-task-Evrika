import { useDispatch, useSelector } from "react-redux";
import { DashboardActions } from "../../dashboard/reducer";
import { closeIcon } from "../button/iconButton";
import { getForm, headerModalName } from "./formHelper";
import { IModalProps } from "./types"
import './style/style.css';
import { selectIsDeleteMode } from "./selectors";

export const ModalWindow: React.FunctionComponent<IModalProps> = ({
  mode,
  userId,
}) => {
  const dispatch = useDispatch();
  const isDelete = useSelector(selectIsDeleteMode)
  
  const onClose = (): void => {
    dispatch(DashboardActions.toggleModal());
    isDelete && dispatch(DashboardActions.modeDelete());
  }

  return (
    <>
      <div className={`modal-background ${isDelete ? 'delete' : 'fullHeight'}`}>
        <div className="modal__body">
          <div className="body__header">
            <div className="empty"></div>
            <div className="header__name">{headerModalName(mode)}</div>
            <div className="header__close" onClick={onClose}>{ closeIcon }</div>
          </div>
          <div className="body__content">
            {
              typeof mode === 'string' && getForm(mode)
            }
          </div>
        </div>
      </div>
    </>
  )
};