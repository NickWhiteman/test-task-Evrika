import { useForm } from "react-hook-form";
import { FormComponent } from "./coponents/FormComponent";
import { Button } from "../button/Button";
import { useSelector } from "react-redux";
import {selectorGetUsers} from '../../dashboard/selectors'
import { FormUser } from "./types";
import { selectUserIdEdition } from "./selectors";
import { useEffect } from "react";

export const FormEdit: React.FunctionComponent = () => {
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

  const onSubmit = handleSubmit((data: FormUser) => {
    console.log(data);
  })

  useEffect(() => {
    console.log('onSubmit: ', onSubmit);
    console.log('userId: ', userId);
    console.log('users: ', users);
    console.log('currentUser: ', currentUser);
    console.log('register: ', register);
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
          <div className="empty"></div>
            <button type='submit'>Обновить</button>
        </div>
      </FormComponent>
    </>
  )
}