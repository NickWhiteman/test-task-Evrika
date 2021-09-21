import { useState } from "react"
import { useDispatch } from "react-redux"
import { data } from "../../../dashboard/const"
import { IUser } from "../../../dashboard/types"
import { Button } from "../../button/Button"
import { closeIcon } from "../../button/iconButton"
import { IModalCreateProps } from "../types"

export const ModalWindowCreate: React.FunctionComponent<Partial<IModalCreateProps>> = ({
  fields,
  keyUser,
  userId,
  onSubmit,
  onClose,
  isOpen
}) => {
  const dispatch = useDispatch();
  userId !== undefined 
  const [modelUser, setModelUser]: IUser = useState(getUsersById(data, userId));
  

  function getUsersById(data: IUser[], currentId: number): IUser {
    let user: IUser = { ...data.find((item) => item.id === currentId && item) };
    return user
  }

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setModelUser({
      [name]: value
    });
  };

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
}