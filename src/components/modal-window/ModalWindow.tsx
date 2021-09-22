import { useDispatch } from "react-redux";
import { DashboardActions } from "../../dashboard/reducer";
import { closeIcon } from "../button/iconButton";
import { getForm, headerModalName } from "./coponents/formHelper";
import { IFormOptions, IModalProps } from "./types"

export const ModalWindow: React.FunctionComponent<IModalProps> = ({
  mode,
  fields,
  userId,
  isOpen
}) => {
  const dispatch = useDispatch();

  const options = function (fields: string[], userId?: number) {
    
    const options:IFormOptions = {
      options: {
        userId: userId,
        fields: fields
      }
    }
    return options
  }(fields, userId);

  const onClose = (): void => {
    dispatch(DashboardActions.toggleModal());
  }

  return (
    <>
      {isOpen &&
        <div className="modal-background">
          <div className="modal__body">
            <div className="body__header">
              <div className="header__name">{headerModalName(mode)}</div>
              <div className="header__close" onChange={onClose}>{ closeIcon }</div>
            </div>
            <div className="body__content">
              {
                typeof mode === 'string' && getForm(mode, options)
              }
            </div>
          </div>
        </div>
      }
    </>
  )
};