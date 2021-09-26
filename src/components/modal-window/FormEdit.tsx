import { useForm } from "react-hook-form";
import { FormComponent } from "./coponents/FormComponent";
import { Button } from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import {selectorGetUsers} from '../../dashboard/selectors'
import { FormUser } from "./types";
import { selectUserIdEdition } from "./selectors";
import { editionUserHandler } from "../../data";
import { DashboardActions } from "../../dashboard/reducer";

export const FormEdit: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserIdEdition)
  const users = useSelector(selectorGetUsers);
  const currentUser = users.find(user => user.id === userId);
  const { register, handleSubmit } = useForm<FormUser>({
    defaultValues: {
      firstName: currentUser ? currentUser.firstName : '',
      lastName: currentUser ? currentUser.lastName : '',
      fatherName: currentUser ? currentUser.fatherName : '',
      email: currentUser ? currentUser.email : '',
      login: currentUser ? currentUser.login : '',
    }
  });

  const saveData = (data: FormUser, id: number) => {
    editionUserHandler(data, id);
  }

  const onSubmit = handleSubmit((data: FormUser) => {
    saveData(data, userId);
    dispatch(DashboardActions.toggleModal());
  });

  return (
    <>
      <FormComponent onSubmit={onSubmit}>
        <div className="content__inputField">
          <label htmlFor='firstName'>Фамилия</label>
          <input
            {...register('firstName')}
            id='firstName'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='lastName'>Имя</label>
          <input
            {...register('lastName')}
            id='lastName'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='fatherName'>Отчество</label>
          <input
            {...register('fatherName')}
            id='fatherName'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='email'>Email</label>
          <input
            {...register('email')}
            id='email'
            type='text'/>
        </div>
        <div className="content__inputField">
          <label htmlFor='login'>Логин</label>
          <input
            {...register('login')}
            id='login'
            type='text'/>
        </div>
        <div className="body__footer">
            <Button
              mode='submit'
              children='Обновить'></Button>
        </div>
      </FormComponent>
    </>
  )
}