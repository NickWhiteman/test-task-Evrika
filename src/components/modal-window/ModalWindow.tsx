import { Form } from "./form/Form";
import { FormEdit } from "./form/FormEdit";
import { IModalProps } from "./types"

export const ModalWindow: React.FunctionComponent<Partial<IModalProps>> = ({
  mode,
  fields,
  keyUser?,
  userId?,
  isOpen,
  onSubmit,
  onClose,
}) => {
  return (
    isOpen && 
    <>
      <div className="modal-background">
        <div className="modal__body">
          <div className="body__header">
            <div className="header__name">{ 'Создание пользователя' }</div>
            <div className="header__close" onChange={onClose}>{ closeIcon }</div>
          </div>
          <div className="body__content">
            {
              switch(mode) {
                case 'createUser': <Form />
                default: <></>
              }
            }
            <div className="body__footer">
              <Button
                mode='button'
                children='Создать'
                onChange={() => modelUser && onSubmit(modelUser, dispatch)}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};