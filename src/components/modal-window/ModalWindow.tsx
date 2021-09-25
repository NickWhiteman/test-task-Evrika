import { useDispatch } from "react-redux";
import { DashboardActions } from "../../dashboard/reducer";
import { closeIcon } from "../button/iconButton";
import { getForm, headerModalName } from "./formHelper";
import { IModalProps } from "./types"
import './style/style.css';

export const ModalWindow: React.FunctionComponent<IModalProps> = ({
  mode,
  userId,
}) => {
  const dispatch = useDispatch();
  const options = userId ? userId : 0;
  const onClose = (): void => {
    dispatch(DashboardActions.toggleModal());
  }

  return (
    <>
      <div className="modal-background">
        <div className="modal__body">
          <div className="body__header">
            <div className="empty"></div>
            <div className="header__name">{headerModalName(mode)}</div>
            <div className="header__close" onClick={onClose}>{ closeIcon }</div>
          </div>
          <div className="body__content">
            {
              typeof mode === 'string' && getForm(mode, options)
            }
          </div>
        </div>
      </div>
    </>
  )
};